import type { Metadata, ResolvingMetadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { trainingProgramsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import TrainingPage from "./client";

type Props = {
  params: Promise<{ slug: string }>;
};

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   const post = await sanityFetch({
//     query: postQuery,
//     params,
//     stega: false,
//   });
//   const previousImages = (await parent).openGraph?.images || [];
//   const ogImage = resolveOpenGraphImage(post?.coverImage);

//   return {
//     authors: post?.author?.name ? [{ name: post?.author?.name }] : [],
//     title: post?.title,
//     description: post?.excerpt,
//     openGraph: {
//       images: ogImage ? [ogImage, ...previousImages] : previousImages,
//     },
//   } satisfies Metadata;
// }

export default async function Training({ params }: Props) {
  const [data] = await Promise.all([
    sanityFetch({ query: trainingProgramsQuery }),
  ]);

  return <TrainingPage courses={data} />;
}
