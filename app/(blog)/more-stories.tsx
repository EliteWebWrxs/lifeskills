import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateComponent from "./date";
import { sanityFetch } from "@/sanity/lib/fetch";
import { moreStoriesQuery } from "@/sanity/lib/queries";

export default async function MoreStories(params: {
  skip: string;
  limit: number;
}) {
  const data = await sanityFetch({ query: moreStoriesQuery, params });

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No stories found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data?.map((post: any) => {
        const {
          _id,
          title,
          slug,
          coverImage,
          excerpt,
          author,
          date,
          categories,
        } = post;
        return (
          <Card
            key={_id}
            className="overflow-hidden flex flex-col h-full transition-all hover:shadow-md"
          >
            <Link href={`/posts/${slug}`} className="group overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <CoverImage
                  image={coverImage}
                  priority={false}
                  // className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            <CardHeader className="pb-2">
              {categories && categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {categories.slice(0, 2).map((category: any) => (
                    <Badge
                      key={category}
                      variant="secondary"
                      className="text-xs"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              )}
              <h3 className="text-balance text-xl font-semibold leading-tight">
                <Link
                  href={`/posts/${slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {title}
                </Link>
              </h3>
              <div className="text-sm text-muted-foreground">
                <DateComponent dateString={date} />
              </div>
            </CardHeader>

            <CardContent className="pb-4 flex-grow">
              {excerpt && (
                <p className="text-pretty text-sm text-muted-foreground line-clamp-3">
                  {excerpt}
                </p>
              )}
            </CardContent>

            <CardFooter className="pt-0 border-t">
              {author && (
                <div className="flex items-center justify-between w-full pt-4">
                  <Avatar name={author.name} picture={author.picture} />
                  <Link
                    href={`/posts/${slug}`}
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              )}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
