import Link from "next/link";
import { Suspense } from "react";
import Avatar from "../avatar";
import CoverImage from "../cover-image";
import DateComponent from "../date";
import MoreStories from "../more-stories";
import type { HeroQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";

export default async function Page() {
  const [settings, heroPost] = await Promise.all([
    sanityFetch({
      query: settingsQuery,
    }),
    sanityFetch({ query: heroQuery }),
  ]);

  return (
    <div className="min-h-screen flex flex-col py-32">
      {/* Main Content */}
      <div className="flex-1 ">
        {/* Hero Section */}
        <section className="container mx-auto px-4">
          {settings?.description && (
            <div className="mb-10 max-w-2xl">
              <p className="text-xl text-muted-foreground">
                {settings.description}
              </p>
            </div>
          )}

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              slug={heroPost.slug}
              coverImage={heroPost.coverImage}
              excerpt={heroPost.excerpt}
              date={heroPost.date}
              author={heroPost.author}
            />
          )}
        </section>

        {heroPost?._id && (
          <section className="bg-muted/50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
                More Posts
              </h2>
              <Suspense
                fallback={
                  <div className="h-96 flex items-center justify-center">
                    Loading stories...
                  </div>
                }
              >
                <MoreStories skip={heroPost._id} limit={100} />
              </Suspense>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function HeroPost({
  title,
  slug,
  excerpt,
  coverImage,
  date,
  author,
}: Pick<
  Exclude<HeroQueryResult, null>,
  "title" | "coverImage" | "date" | "excerpt" | "author" | "slug"
>) {
  return (
    <article className="rounded-xl overflow-hidden border bg-card shadow-sm">
      <Link className="group block" href={`/posts/${slug}`}>
        <div className="relative aspect-[21/9] overflow-hidden">
          <CoverImage image={coverImage} priority />
        </div>
      </Link>
      <div className="p-6 md:p-8">
        <div className="space-y-4">
          <h1 className="text-pretty text-3xl font-bold leading-tight lg:text-4xl">
            <Link href={`/posts/${slug}`} className="hover:text-primary">
              {title}
            </Link>
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <DateComponent dateString={date} />
          </div>
          {excerpt && (
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {excerpt}
            </p>
          )}
          <div className="pt-4">
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
        </div>
      </div>
    </article>
  );
}
