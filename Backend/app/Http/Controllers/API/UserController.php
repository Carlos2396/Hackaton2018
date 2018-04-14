<?php

namespace App\Http\Controllers\API;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(
            User::with([
                'snippets',
                'mashes',
                'likedSnippets',
                'followedMashes'
            ])->get(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|max:255|e-mail|unique:users',
            'name' => 'required|max:100',
            'birthdate' => 'required|date',
            'password' => 'required|max:255'
        ]);

        if($validator->fails()){
            return response($validator->errors(), 400);
        }

        $user = User::create([
            'email' => $request->email,
            'name' => $request->name,
            'birthdate' => $request->birthdate,
            'password' => bcrypt($request->password)
        ]);

        return response($user, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $user->mashes;
        $user->snippets;
        $user->followedMashes;
        $user->likedSnippets;
        return response($user, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|max:255|e-mail',
            'name' => 'required|max:100',
            'birthdate' => 'required|date'
        ]);

        if($validator->fails()){
            return response($validator->errors(), 400);
        }

        $user->name = $request->name;
        $user->email = $request->email;
        $user->birthdate = $request->birthdate;
        
        if($user->save()){
            return response($user, 200);
        }
        else{
            return response(["message" => "Unabled to update user."], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        if($user->delete()){
            return response(["message" => "User succesfully deleted."], 200);
        }
        else{
            return response(["message" => "Unabled to delete user."], 400);
        }
    }
}
