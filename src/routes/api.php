<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'App\Http\Controllers\AuthController@login');
Route::post('logout', 'App\Http\Controllers\AuthController@logout');
Route::get('login_user', 'App\Http\Controllers\AuthController@getLoginUser');

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('ganttchart/get', 'App\Http\Controllers\GanttchartController@index');
    Route::post('ganttchart/store', 'App\Http\Controllers\GanttchartController@store');
    Route::put('ganttchart/update', 'App\Http\Controllers\GanttchartController@update');
    Route::put('ganttchart/delete', 'App\Http\Controllers\GanttchartController@delete');
});
