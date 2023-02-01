<?php

namespace Tests\Feature\Ganttchart;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class createGantt extends TestCase
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
    public function test_create_seccess()
    {
        // ユーザの作成
        $user = User::factory()->create();
        $user = User::find($user->id);
        $response = $this->actingAs($user)->json("POST", "api/ganttchart/store", [
            "name" => "name",
            "start" => "2022-01-01",
            "end" => "2022-01-02",
        ]);
        $response->assertStatus(200);
        // 上記で作成したデータがデータベースに存在するかチェック
        $this->assertDatabaseHas("ganttcharts", [
            "name" => "name",
            "start" => "2022-01-01",
            "end" => "2022-01-02",
            "user_id" => $user->id,
            "type" => "task",
            "progress" => 100,
        ]);
    }

    /**
     * @test
     */
    public function test_create_validate_name()
    {
        // ユーザの作成
        $user = User::factory()->create();
        $user = User::find($user->id);
        // nameがnullの場合
        $response = $this->actingAs($user)->json("POST", "api/ganttchart/store", [
            "name" => "",
            "start" => "2022-01-01",
            "end" => "2022-01-02",
        ]);
        $response->assertStatus(401);
        // nameが63文字以内の場合
        $response = $this->actingAs($user)->json("POST", "api/ganttchart/store", [
            "name" => str_repeat("a", 63),
            "start" => "2022-01-01",
            "end" => "2022-01-02",
        ]);
        $response->assertStatus(200);
        // 上記で作成したデータがデータベースに存在するかチェック
        $this->assertDatabaseHas("ganttcharts", [
            "name" => str_repeat("a", 63),
            "start" => "2022-01-01",
            "end" => "2022-01-02",
            "user_id" => $user->id,
            "type" => "task",
            "progress" => 100,
        ]);
        // nameが64文字以上の場合
        $response = $this->actingAs($user)->json("POST", "api/ganttchart/store", [
            "name" => str_repeat("a", 64),
            "start" => "2022-01-01",
            "end" => "2022-01-02",
        ]);
        $response->assertStatus(401);
    }

    /**
     * @test
     */
    public function test_create_validate_start_and_end()
    {
        // ユーザの作成
        $user = User::factory()->create();
        $user = User::find($user->id);
        // startがnullの場合
        $response = $this->actingAs($user)->json("POST", "api/ganttchart/store", [
            "name" => "name",
            "start" => "",
            "end" => "2022-01-02",
        ]);
        $response->assertStatus(401);
        // endがnullの場合
        $response = $this->actingAs($user)->json("POST", "api/ganttchart/store", [
            "name" => "name",
            "start" => "2022-01-01",
            "end" => "",
        ]);
        $response->assertStatus(401);
        // start=endの場合
        $response = $this->actingAs($user)->json("POST", "api/ganttchart/store", [
            "name" => "name",
            "start" => "2022-01-01",
            "end" => "2022-01-01",
        ]);
        $response->assertStatus(200);
        // 上記で作成したデータがデータベースに存在するかチェック
        $this->assertDatabaseHas("ganttcharts", [
            "name" => "name",
            "start" => "2022-01-01",
            "end" => "2022-01-01",
            "user_id" => $user->id,
            "type" => "task",
            "progress" => 100,
        ]);
        // start>endの場合
        $response = $this->actingAs($user)->json("POST", "api/ganttchart/store", [
            "name" => "name",
            "start" => "2022-01-02",
            "end" => "2022-01-01",
        ]);
        $response->assertStatus(401);
    }
    /*
    * @test
    */
    public function test_create_not_login_user()
    {
        $response = $this->json("POST", "api/ganttchart/store", [
            "name" => "name",
            "start" => "2022-01-01",
            "end" => "2022-01-02",
        ]);
        $response->assertStatus(401);
    }
}
