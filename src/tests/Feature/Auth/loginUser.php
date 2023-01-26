<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class loginUser extends TestCase
{

    // テスト終了後にマイグレーションを実行する
    public function tearDown(): void
    {
        parent::setUp();
        $this->artisan('migrate:refresh --seed');
    }

    /**
     * @test
     */
    public function test_login()
    {
        // ユーザの作成
        $user = User::factory()->create([
            "email" => "test@example.com",
            "password" => Hash::make("password"),
        ]);
        $user = User::find($user->id);
        // ログインAPIの実行
        $response = $this->json('POST', 'api/login', [
            "email" => $user->email,
            "password" => "password",
        ]);
        $response->assertStatus(200);
        // ログインユーザ取得APIの実行
        $response = $this->actingAs($user)->json('GET', 'api/login_user');
        $response->assertStatus(200);
    }

    public function test_logout()
    {
        // ユーザの作成
        $user = User::factory()->create();
        $user = User::find($user->id);
        // ログアウトAPIの実行
        $response = $this->actingAs($user)->json('POST', 'api/logout',);
        $response->assertStatus(200);
        // ログインユーザ取得APIの実行
        $response = $this->json('GET', 'api/login_user');
        $response->assertStatus(200);
        $response->assertJson(["isAuth" => false]);
    }
}
