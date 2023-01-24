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
    }
}
