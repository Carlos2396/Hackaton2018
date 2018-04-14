<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mash extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'start_datetime', 'quantum', 'bpm', 'key', 'metre', 'user_id'
    ];

    protected $dates = [
        'start_datetime'
    ];

    /**
     * Relations of Mash model
     */

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function users(){
        return $this->belongsToMany('App\User')->withTimestamps();
    }

    public function rounds(){
        return $this->hasMany('App\Round');
    }
}
