<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class UserManagementController extends Controller
{
    public function list()
    {
        return Inertia::render('user/list', [
            'users' => User::all()->select('id', 'name', 'designation', 'can_manage_user', 'can_manage_leave'),
        ]);
    }
}
