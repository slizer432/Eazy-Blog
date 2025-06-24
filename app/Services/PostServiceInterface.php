<?php

namespace App\Services;

interface PostServiceInterface
{
    public function getAllPosts();
    public function getPostById($id);
    public function createPost(array $data);
    public function updatePost($id, array $data);
    public function deletePost($id);
    public function getPostsByUserId($userId);
    public function searchPosts($query);
}