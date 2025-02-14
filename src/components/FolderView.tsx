'use client';
import { useRouter } from 'next/navigation';
import { ContentCard } from './ContentCard';

export const FolderView = ({
  courseContent,
  courseId,
  rest,
}: {
  courseId: number
  rest: string[]
  courseContent: {
    title: string
    image: string
    id: number
  }[]
}) => {
  const router = useRouter();

  if (!courseContent.length) {
    return (
      <div className="flex mt-64">
        <div className="m-auto">No content here yet!</div>
      </div>
    );
  }
  let updatedRoute = `/courses/${courseId}`;
  for (let i = 0; i < rest.length; i++) {
    updatedRoute += `/${rest[i]}`;
  }
  // why? because we have to reset the segments or they will be visible always after a video

  return (
    <div>
      <div></div>
      <div className="max-w-screen-xl justify-between mx-auto p-4 cursor-pointer grid grid-cols-1 gap-5 md:grid-cols-3">
        {courseContent.map(
          (content: { image: string; id: number; title: string }) => (
            <ContentCard
              key={content.id}
              title={content.title}
              image={content.image || ''}
              onClick={() => {
                router.push(`${updatedRoute}/${content.id}`);
              }}
            />
          ),
        )}
      </div>
    </div>
  );
};
