<?php

namespace Tests\Feature\Ganttchart;

use App\Models\Ganttchart;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class updateGantt extends TestCase
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
    public function test_update_seccess()
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
        $response = $this->actingAs($user)->json("PUT", "api/ganttchart/update", [
            "id" => $schedule->id,
            "name" => "update_name",
            "start" => "2022-02-01",
            "end" => "2022-02-03",
        ]);
        $response->assertStatus(200);
        // 上記で作成したデータがデータベースに存在するかチェック
        $this->assertDatabaseHas("ganttcharts", [
            "name" => "update_name",
            "start" => "2022-02-01",
            "end" => "2022-02-03",
            "user_id" => $user->id,
            "type" => "task",
            "progress" => 100,
        ]);
    }

    /**
     * @test
     */
    public function test_update_validate_id()
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
        $response = $this->actingAs($user)->json("PUT", "api/ganttchart/update", [
            "id" => $not_exist_schedule_id,
            "name" => "name",
            "start" => "2022-01-01",
            "end" => "2022-01-02",
        ]);
        $response->assertStatus(401);
    }

    /**
     * @test
     */
    public function test_update_validate_name()
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
        // nameがnullの場合
        $response = $this->actingAs($user)->json("PUT", "api/ganttchart/update", [
            "id" => $schedule->id,
            "name" => "",
            "start" => "2022-01-01",
            "end" => "2022-01-02",
        ]);
        $response->assertStatus(401);
        // nameが63文字以内の場合
        $response = $this->actingAs($user)->json("PUT", "api/ganttchart/update", [
            "id" => $schedule->id,
            "name" => str_repeat("a", 63),
            "start" => "2022-01-01",
            "end" => "2022-01-02",
        ]);
        $response->assertStatus(200);
        // 上記で作成したデータがデータベースに存在するかチェック
        $this->assertDatabaseHas("ganttcharts", [
            "id" => $schedule->id,
            "name" => str_repeat("a", 63),
            "start" => "2022-01-01",
            "end" => "2022-01-02",
            "user_id" => $user->id,
            "type" => "task",
            "progress" => 100,
        ]);
        // nameが64文字以上の場合
        $response = $this->actingAs($user)->json("PUT", "api/ganttchart/update", [
            "id" => $schedule->id,
            "name" => str_repeat("a", 64),
            "start" => "2022-01-01",
            "end" => "2022-01-02",
        ]);
        $response->assertStatus(401);
    }

    /**
     * @test
     */
    public function test_update_validate_start_and_end()
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
        // startがnullの場合
        $response = $this->actingAs($user)->json("PUT", "api/ganttchart/update", [
            "id" => $schedule->id,
            "name" => "name",
            "start" => "",
            "end" => "2022-01-02",
        ]);
        $response->assertStatus(401);
        // endがnullの場合
        $response = $this->actingAs($user)->json("PUT", "api/ganttchart/update", [
            "id" => $schedule->id,
            "name" => "name",
            "start" => "2022-01-01",
            "end" => "",
        ]);
        $response->assertStatus(401);
        // start=endの場合
        $response = $this->actingAs($user)->json("PUT", "api/ganttchart/update", [
            "id" => $schedule->id,
            "name" => "name",
            "start" => "2022-01-04",
            "end" => "2022-01-04",
        ]);
        $response->assertStatus(200);
        // 上記で作成したデータがデータベースに存在するかチェック
        $this->assertDatabaseHas("ganttcharts", [
            "id" => $schedule->id,
            "name" => "name",
            "start" => "2022-01-04",
            "end" => "2022-01-04",
            "user_id" => $user->id,
            "type" => "task",
            "progress" => 100,
        ]);
        // start>endの場合
        $response = $this->actingAs($user)->json("PUT", "api/ganttchart/update", [
            "id" => $schedule->id,
            "name" => "name",
            "start" => "2022-01-02",
            "end" => "2022-01-01",
        ]);
        $response->assertStatus(401);
    }
    /*
    * @test
    */
    public function test_update_not_login_user()
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
        $response = $this->json("PUT", "api/ganttchart/update", [
            "id" => $schedule->id,
            "name" => "name",
            "start" => "2022-01-01",
            "end" => "2022-01-02",
        ]);
        $response->assertStatus(401);
    }
}
