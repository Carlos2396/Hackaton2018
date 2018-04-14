<?php

namespace App\Http\Controllers\API;

use App\Round;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RoundSnippetController extends Controller
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
            'round_id' => 'required|integer|exists:rounds,id',
            'snippet_id' => 'required|integer|exists:snippets,id',
        ]);

        if($validator->fails()){
            return response($validator->errors(), 400);
        }

        $round = Round::find($request->round_id);
        $round->snippets()->attach($request->snippet_id);
        $round->save();

        return response($round, 201);
    }
}
