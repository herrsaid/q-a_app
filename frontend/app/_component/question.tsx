"use client"

interface QuestionProps{
  content:string;
  likesNumbers:number;
}

import { Button } from '@/components/ui/button';
import { Ghost, ThumbsUp } from 'lucide-react';
import { useState } from 'react';

export default function Question({ content, likesNumbers }: QuestionProps) {

  const handleLike = () => {
    
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
      <p className="text-lg font-semibold">{content}</p>
      <div className="flex items-center mt-2">
        <Button asChild variant="ghost"
          onClick={handleLike}
          className="bg-blue-500 text-white p-2 rounded-md mr-2 hover:bg-blue-600"
        >
          <ThumbsUp size={36}></ThumbsUp>
        </Button>
        <span className="text-gray-600">{likesNumbers} Likes</span>
      </div>
    </div>
  );
}
