<?php

namespace App\Http\Controllers\API;

use App\Round;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class RoundController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(
            Round::with([
                'mash',
                'snippets',
                'votingUsers'
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
            'mash_id' => 'required|integer|min:1'
        ]);

        if($validator->fails()){
            return response($validator->errors(), 400);
        }

        $round = Round::create([
            'mash_id' => $request->mash_id
        ]);

        return response($round, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Round  $round
     * @return \Illuminate\Http\Response
     */
    public function show(Round $round)
    {
        $round->mash;
        $round->snippets;
        $round->votingUsers;
        return $round;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Round  $round
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Round $round)
    {
        $validator = Validator::make($request->all(), [
            'mash_id' => 'required|integer|min:1'
        ]);

        if($validator->fails()){
            return response($validator->errors(), 400);
        }

        $round->mash_id = $request->mash_id;

        if($round->save()){
            return response($round, 200);
        }
        else{
            return response(["message" => "Unabled to update round."], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Round  $round
     * @return \Illuminate\Http\Response
     */
    public function destroy(Round $round)
    {
        if($round->delete()){
            return response(["message" => "Mash succesfully deleted."], 200);
        }
        else{
            return response(["message" => "Unabled to delete mash."], 400);
        }
    }
}
