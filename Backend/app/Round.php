<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Round extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'mash_id'
    ];

    /**
     * Relations of User model
     */

    public function mash(){
        return $this->belongsTo('App\Mash');
    }

    public function votingUsers(){
        return $this->belongsToMany('App\User')
            ->withPivot('snippet_id');
    }

    public function snippets(){
        return $this->belongsToMany('App\Snippet')
            ->withPivot('start_time');
    }
}
