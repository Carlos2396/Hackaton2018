<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'birthdate'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Relations of User model
     */
    
    public function mashes(){
        return $this->hasMany('App\Mash');
    }

    public function snippets(){
        return $this->hasMany('App\Snippet');
    }

    public function followedMashes(){
        return $this->belongsToMany('App\Mash')->withTimestamps();
    }

    public function likedSnippets(){
        return $this->belongsToMany('App\Snippet', 'round_user', 'user_id', 'snippet_id')
            ->withPivot('round_id');
    }

    public function voteForSnippet($snippet_id, $round_id){
        return $this->likedSnippets()->attach([
            $snippet_id => ["round_id" => $round_id] 
        ]);
    }

    public function unvoteForSnippet($snippet_id, $round_id){
        return $this->likedSnippets()->detach($snippet_id);
    }
}
