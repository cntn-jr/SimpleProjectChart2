<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials, true)) {
            $login_user_id = Auth::user()->id;
            $login_user = User::find($login_user_id);
            $login_user->tokens()->delete();
            $login_user->createToken("login:user{$login_user->id}")->plainTextToken;
            return response()->json();
        }
        return response()->json([], 401);
    }

    public function getLoginUser(){
        return Auth::user();
    }
}
