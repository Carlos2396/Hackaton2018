<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Snippet extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'user_id', 'instrument_id', 'path'
    ];

    /**
     * Relations of User model
     */

    public function instrument(){
        return $this->belongsTo('App\Instrument');
    }

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function usersLike(){
        return $this->belongsToMany('App\User', 'round_user', 'snippet_id', 'user_id')
            ->withPivot('round_id');
    }

    public function rounds(){
        return $this->belongsToMany('App\Round')
            ->withPivot('start_time');
    }

    public function mashes(){
        return $this->hasMany('App\Mash');
    }
}
