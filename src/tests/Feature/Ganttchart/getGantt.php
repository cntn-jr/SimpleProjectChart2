<?php

namespace Tests\Feature\Ganttchart;

use App\Models\Ganttchart;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class getGantt extends TestCase
{

    // テスト開始前にマイグレーションを実行する
    public function setUp(): void
    {
        parent::setUp();
        $this->artisan('migrate:refresh');
    }

    // テスト終了後にマイグレーションを実行する
    public function tearDown(): void
    {
        parent::setUp();
        $this->artisan('migrate:refresh --seed');
    }

    /**
     * @test
     */
    public function test_get_ganttchart()
    {
        // ユーザ作成
        $user = User::factory()->create();
        $user = User::find($user->id);
        // ダミーユーザ
        $dummy_users = User::factory()->count(3)->create();
        // ガントチャートの作成
        $id = 1;
        $gantt1 = Ganttchart::factory()->create([
            "id" => $id++,
            "start" => "2020-01-01",
            "end" => "2020-01-04",
            "user_id" => $user->id,
        ]);
        $gantt2 = Ganttchart::factory()->create([
            "id" => $id++,
            "start" => "2021-02-11",
            "end" => "2021-02-14",
            "user_id" => $user->id,
        ]);
        $gantt3 = Ganttchart::factory()->create([
            "id" => $id++,
            "start" => "2022-11-11",
            "end" => "2022-11-16",
            "user_id" => $user->id,
        ]);
        // ダミーチャートの作成
        Ganttchart::factory()->count(3)->create(["user_id" => $dummy_users[0]->id]);
        Ganttchart::factory()->count(3)->create(["user_id" => $dummy_users[1]->id]);
        Ganttchart::factory()->count(3)->create(["user_id" => $dummy_users[2]->id]);
        // APIの実行
        $response = $this->actingAs($user)->json("GET", "api/ganttchart/get");
        // 想定しているデータが取得できているかチェック
        $response->assertStatus(200);
        $response->assertJsonCount(3);
        $response->assertJson([[
            "id" => 1,
            "name" => $gantt1->name,
            "start" => "2020-01-01",
            "end" => "2020-01-04",
            "type" => "task",
            "progress" => 100,
        ], [
            "id" => 2,
            "name" => $gantt2->name,
            "start" => "2021-02-11",
            "end" => "2021-02-14",
            "type" => "task",
            "progress" => 100,
        ], [
            "id" => 3,
            "name" => $gantt3->name,
            "start" => "2022-11-11",
            "end" => "2022-11-16",
            "type" => "task",
            "progress" => 100,
        ],]);
    }

    /**
     * @test
     */
    public function test_get_ganttchart_by_not_login_user()
    {
        // APIの実行
        $response = $this->json("GET", "api/ganttchart/get");
        // 想定しているデータが取得できているかチェック
        $response->assertStatus(401);
    }
}
