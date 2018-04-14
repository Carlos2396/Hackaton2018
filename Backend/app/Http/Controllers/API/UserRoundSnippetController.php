<?php

namespace App\Http\Controllers\API;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserRoundSnippetController extends Controller
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
            'round_id' => 'required|integer|exists:rounds,id',
            'snippet_id' => 'required|integer|exists:snippets,id',
        ]);

        if($validator->fails()){
            return response($validator->errors(), 400);
        }

        $user = User::find($request->user_id);
        $user->likeSnippetInRound($request->snippet_id, $request->round_id);

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
            'round_id' => 'required|integer|exists:rounds,id',
            'snippet_id' => 'required|integer|exists:snippets,id',
        ]);

        if($validator->fails()){
            return response($validator->errors(), 400);
        }

        $user = User::find($request->user_id);
        $user->removeLikeFromSnippet($request->snippet_id, $request->round_id);

        return response($user, 201);
    }
}
