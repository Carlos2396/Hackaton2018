<?php

namespace App\Http\Controllers\API;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MashUserController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|integer|exists:users,id',
            'mash_id' => 'required|integer|exists:mashes,id',
        ]);

        if($validator->fails()){
            return response($validator->errors(), 400);
        }

        $user = User::find($request->user_id);
        $user->likeMash($request->mash);

        return response($user, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|integer|exists:users,id',
            'mash_id' => 'required|integer|exists:mashes,id',
        ]);

        if($validator->fails()){
            return response($validator->errors(), 400);
        }

        $user = User::find($request->user_id);
        $user->removeLikeMash($request->mash_id);

        return response($user, 201);
    }
}
