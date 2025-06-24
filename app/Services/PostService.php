<?php

namespace App\Services;

use App\Repositories\PostRepositoryInterface;

class PostService implements PostServiceInterface
{
    protected $postRepository;

    public function __construct(PostRepositoryInterface $postRepository)
    {
        $this->postRepository = $postRepository;
    }

    public function getAllPosts()
    {
        return $this->postRepository->getAllPosts();
    }

    public function getPostById($id)
    {
        return $this->postRepository->getPostById($id);
    }

    public function createPost(array $data)
    {
        return $this->postRepository->createPost($data);
    }

    public function updatePost($id, array $data)
    {
        return $this->postRepository->updatePost($id, $data);
    }

    public function deletePost($id)
    {
        return $this->postRepository->deletePost($id);
    }

    public function getPostsByUserId($userId)
    {
        return $this->postRepository->getPostsByUserId($userId);
    }

    public function searchPosts($query)
    {
        return $this->postRepository->searchPosts($query);
    }
}