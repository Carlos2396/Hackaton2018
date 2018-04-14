<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;

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

Route::get('', function() {
    return "Mashup Music API";
});

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::group(['middleware' => ['cors'], 'as' => 'api', 'namespace' => 'API'], function () {
    Route::post('login', 'AuthController@login')->name('login');

    // Users routes
    Route::get('users', 'UserController@index')->name('users');
    Route::get('users/{user}', 'UserController@show')->name('users.show');
    Route::post('users', 'UserController@store')->name('users.store');
    Route::put('users/{user}', 'UserController@update')->name('users.update');
    Route::delete('users/{user}', 'UserController@destroy')->name('users.delete');

    // Snippets routes
    Route::get('snippets', 'SnippetController@index')->name('snippets');
    Route::get('snippets/{snippet}', 'SnippetController@show')->name('snippets.show');
    Route::post('snippets', 'SnippetController@store')->name('snippets.store');
    Route::put('snippets/{snippet}', 'SnippetController@update')->name('snippets.update');
    Route::delete('snippets/{snippet}', 'SnippetController@destroy')->name('snippets.delete');

    // Round routes
    Route::get('rounds', 'RoundController@index')->name('rounds');
    Route::get('rounds/{round}', 'RoundController@show')->name('rounds.show');
    Route::post('rounds', 'RoundController@store')->name('rounds.store');
    Route::put('rounds/{round}', 'RoundController@update')->name('rounds.update');
    Route::delete('rounds/{round}', 'RoundController@destroy')->name('rounds.delete');

    // Instrument routes
    Route::get('instruments', 'InstrumentController@index')->name('instruments');
    Route::get('instruments/{instrument}', 'InstrumentController@show')->name('instruments.show');
    Route::post('instruments', 'InstrumentController@store')->name('instruments.store');
    Route::put('instruments/{instrument}', 'InstrumentController@update')->name('instruments.update');
    Route::delete('instruments/{instrument}', 'InstrumentController@destroy')->name('instruments.delete');

    // Mash routes
    Route::get('mashes', 'MashController@index')->name('mashes');
    Route::get('mashes/{mash}', 'MashController@show')->name('mashes.show');
    Route::post('mashes', 'MashController@store')->name('mashes.store');
    Route::put('mashes/{mash}', 'MashController@update')->name('mashes.update');
    Route::delete('mashes/{mash}', 'MashController@destroy')->name('mashes.delete');
});