<?php

namespace App\Http\Controllers\API;

use App\Instrument;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InstrumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return
        Instrument::with([
            'snippets'
        ])->get();
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
            'type' => 'required|max:100'
        ]);

        if($validator->fails()){
            return response($validator->errors(), 400);
        }

        if(!Instrument::matchesType($request->type))
        {
            return response(["message" => "The instrument type is not valid."], 400);
        }

        $instrument = Instrument::create([
            'name' => $request->name
        ]);
        
        if($instrument){
            return response($instrument, 201);
        }
        else{
            return response(["message" => "The instrument already exists."], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Instrument  $instrument
     * @return \Illuminate\Http\Response
     */
    public function show(Instrument $instrument)
    {
        $instrument->snippets;
        return response($instrument, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Instrument  $instrument
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Instrument $instrument)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:100',
            'type' => 'required|max:100'
        ]);

        if($validator->fails()){
            return response($validator->errors(), 400);
        }

        $instrument->name = $request->name;
        $instrument->type = $request->type;
        
        if($user->save()){
            return response($user, 200);
        }
        else{
            return response(["message" => "Unabled to update instrument."], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Instrument  $instrument
     * @return \Illuminate\Http\Response
     */
    public function destroy(Instrument $instrument)
    {
        if($instrument->delete()){
            return response(["message" => "Instrument succesfully deleted."], 200);
        }
        else{
            return response(["message" => "Unabled to delete instrument."], 400);
        }
    }
}
