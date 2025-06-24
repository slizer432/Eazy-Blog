<?php

namespace App\Repositories;

interface PostRepositoryInterface
{
    public function getAllPosts();
    public function getPostById($id);
    public function createPost($data);
    public function updatePost($id, $data);
    public function deletePost($id);
    public function getPostsByUserId($userId);
    public function searchPosts($query);
}