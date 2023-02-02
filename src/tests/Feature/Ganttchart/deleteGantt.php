<?php

namespace Tests\Feature\Ganttchart;

use App\Models\Ganttchart;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class deleteGantt extends TestCase
{
    // テスト終了後にマイグレーションを実行する
    public function tearDown(): void
    {
        parent::setUp();
        $this->artisan("migrate:refresh --seed");
    }

    /**
     * @test
     */
    public function test_delete_seccess()
    {
        // ユーザの作成
        $user = User::factory()->create();
        $user = User::find($user->id);
        // スケジュールの作成
        $schedule = Ganttchart::factory()->create([
            "name" => "name",
            "start" => "2022-01-01",
            "end" => "2022-01-02",
            "user_id" => $user->id,
        ]);
        $schedule = Ganttchart::find($schedule->id);
        $response = $this->actingAs($user)->json("PUT", "api/ganttchart/delete", [
            "id" => $schedule->id,
        ]);
        $response->assertStatus(200);
        // 上記で作成したデータがデータベースに存在するかチェック
        $this->assertSoftDeleted($schedule);
    }

    /**
     * @test
     */
    public function test_delete_validate_id()
    {
        // ユーザの作成
        $user = User::factory()->create();
        $user = User::find($user->id);
        // スケジュールの作成
        $schedule = Ganttchart::factory()->create([
            "name" => "name",
            "start" => "2022-01-01",
            "end" => "2022-01-02",
            "user_id" => $user->id,
        ]);
        $schedule = Ganttchart::find($schedule->id);
        // 存在しないIDの取得
        $last_schedule = Ganttchart::orderBy("id", "desc")->first();
        $not_exist_schedule_id = $last_schedule->id + 1;
        // idが存在しない場合
        $response = $this->actingAs($user)->json("PUT", "api/ganttchart/delete", [
            "id" => $not_exist_schedule_id,
        ]);
        $response->assertStatus(401);
    }

    /*
    * @test
    */
    public function test_delete_not_login_user()
    {
        // ユーザの作成
        $user = User::factory()->create();
        $user = User::find($user->id);
        // スケジュールの作成
        $schedule = Ganttchart::factory()->create([
            "name" => "name",
            "start" => "2022-01-01",
            "end" => "2022-01-02",
            "user_id" => $user->id,
        ]);
        $schedule = Ganttchart::find($schedule->id);
        $response = $this->json("PUT", "api/ganttchart/delete", [
            "id" => $schedule->id,
        ]);
        $response->assertStatus(401);
    }
}
