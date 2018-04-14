<?php

namespace App\Http\Controllers\API;

use App\Mash;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class MashController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(
        Mash::with([
            'user',
            'users',
            'rounds',
            'snippet'
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
            'name' => 'required|max:100',
            'start_datetime' => 'required|date',
            'quantum' => 'required|integer|max:168|min:1',
            'bpm' => 'required|integer|min:40|max:300',
            'key' => 'required|max:100',
            'metre' => 'required|max:100',
            'user_id' => 'required|integer|min:1'
        ]);

        if($validator->fails()){
            return response($validator->errors(), 400);
        }

        if(!Mash::matchesKey($request->key))
        {
            return response(["message" => "The mash key is not valid."], 400);
        }

        if(!Mash::matchesMetre($request->metre))
        {
            return response(["message" => "The mash metre is not valid."], 400);
        }

        $mash = Mash::create([
            'name' => $request->name,
            'start_datetime' => $request->start_datetime,
            'quantum' => $request->quantum,
            'bpm' => $request->bpm,
            'key' => $request->key,
            'metre' => $request->metre,
            'user_id' => $request->user_id
        ]);

        return response($mash, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mash  $mash
     * @return \Illuminate\Http\Response
     */
    public function show(Mash $mash)
    {
        $mash->user;
        $mash->users;
        $mash->rounds;
        $mash->snippet;
        return response($mash, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mash  $mash
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Mash $mash)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:100',
            'start_datetime' => 'required|date',
            'quantum' => 'required|integer|max:168|min:1',
            'bpm' => 'required|integer|min:40|max:300',
            'key' => 'required|max:100',
            'metre' => 'required|max:100',
            'user_id' => 'required|integer|min:1'
        ]);

        if($validator->fails()){
            return response($validator->errors(), 400);
        }

        if(!Mash::matchesKey($request->key))
        {
            return response(["message" => "The mash key is not valid."], 400);
        }

        if(!Mash::matchesMetre($request->metre))
        {
            return response(["message" => "The mash metre is not valid."], 400);
        }
        
        $mash->name = $request->name;
        $mash->start_datetime = $request->start_datetime;
        $mash->quantum = $request->quantum;
        $mash->bpm = $request->bpm;
        $mash->key = $request->key;
        $mash->metre = $request->metre;
        $mash->user_id = $request->user_id;
        
        if($mash->save()){
            return response($mash, 200);
        }
        else{
            return response(["message" => "Unabled to update mash."], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mash  $mash
     * @return \Illuminate\Http\Response
     */
    public function destroy(Mash $mash)
    {
        if($mash->delete()){
            return response(["message" => "Mash succesfully deleted."], 200);
        }
        else{
            return response(["message" => "Unabled to delete mash."], 400);
        }
    }
}
