<?php

namespace App\Http\Controllers\API;

use App\Snippet;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;

class SnippetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(
            Snippet::with([
                'instrument',
                'user',
                'usersLike',
                'rounds',
                'mashes'
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
            'user_id' => 'required|integer|min:1',
            'instrument_id' => 'required|integer|min:1',
            'name' => 'required|max:100',            
            'file' => 'required'
        ]);

        if($validator->fails()){
            return redirect('http://localhost:4200');
        }

        $snippet = Snippet::create([
            'name' => $request->name,
            'user_id' => $request->user_id,
            'instrument_id' => $request->instrument_id,
            'path' => ''
        ]);
        $file = $request->file('file');
        $ext = $file->extension();
        $snippet->path = $request->file('file')->storeAs('snippets');
        $snippet->save();

        return redirect('http://localhost:4200');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Snippet  $snippet
     * @return \Illuminate\Http\Response
     */
    public function show(Snippet $snippet)
    {
        $snippet->instrument;
        $snippet->user;
        $snippet->usersLike;
        $snippet->rounds;
        $snippet->mash;
        return response($snippet, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Snippet  $snippet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Snippet $snippet)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|integer|min:1',
            'instrument_id' => 'required|integer|min:1',
            'name' => 'required|max:100'
        ]);

        if($validator->fails()){
            return response($validator->errors(), 400);
        }

        $snippet->name = $request->name;
        $snippet->instrument_id = $request->instrument_id;
        $snippet->user_id = $request->user_id;

        if($snippet->save()){
            return response($snippet, 200);
        }
        else{
            return response(["message" => "Unabled to update snippet."], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Snippet  $snippet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Snippet $snippet)
    {
        if($snippet->delete()){
            return response(["message" => "Snippet succesfully deleted."], 200);
        }
        else{
            return response(["message" => "Unabled to delete snippet."], 400);
        }
    }
}
