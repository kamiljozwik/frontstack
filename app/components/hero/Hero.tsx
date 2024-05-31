import { Button } from "@/components/ui/button";
import { ExternalLink } from "../externalLink/ExternalLink";

export const Hero = () => {
  return (
    <section className="mb-12">
      <h1 className="invisible">Blog Frontstack</h1>
      <div className="">
        <div>
          <p className="m-0 text-gray-300">Web Development</p>
          <p className="m-0 text-5xl uppercase font-bold">Vademecum 🎈</p>
          <div className="animate-bounce mt-6">
            <Button asChild>
              <ExternalLink href="https://vademecum.frontstack.pl">
                Zobacz więcej
              </ExternalLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
