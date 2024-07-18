import LOADING from "@/markdown/loading.mdx";

export default function ComponentOnLoad() {
    return (
        <div className="container mx-auto align-left max-w-screen-md">
          <div className="mt-24 md:mt-48px hidden md:flex bgg rounded-xl p-7">
            <div>
              <LOADING />
            </div>
          </div>
        </div>
    );
}
