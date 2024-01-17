import projector from "@/assets/projector-white.svg";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

import { toast } from "sonner";

const domains = ["watch.lonelil.com", "12131989.xyz"];
const tmdb = ["https://api.themoviedb.org/3/movie/1160164"];

function App() {
  return (
    <main className="container flex h-screen flex-col items-center gap-4 py-16">
      <img src={projector} className="" width={150} height={150} alt="Logo" />
      <h1 className="text-center text-3xl font-bold">
        watch.lonelil.com Troubleshooter
      </h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Domains</CardTitle>
          <CardDescription>
            Check your connection to our domains.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {domains.map((domain, i) => {
            return (
              <>
                <div className="flex items-center justify-between">
                  <a target="_blank" rel="noopener" href={`https://${domain}`}>
                    {domain}
                  </a>
                  <Button
                    variant={"secondary"}
                    onClick={() => {
                      toast.promise(fetch(`https://${domain}/cdn-cgi/trace`), {
                        loading: `Checking connection to ${domain}...`,
                        success: () => {
                          return `Connected to ${domain} successfully.`;
                        },
                        error: `Failed to connect to ${domain}.`,
                      });
                    }}
                  >
                    Check
                  </Button>
                </div>
                {i !== domains.length - 1 && <Separator />}
              </>
            );
          })}
        </CardContent>
      </Card>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>TMDB</CardTitle>
          <CardDescription>
            We use The Movie Database for searching and more.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {tmdb.map((url, i) => {
            const hostname = new URL(url).hostname;
            return (
              <>
                <div className="flex items-center justify-between">
                  <h1>{hostname}</h1>
                  <Button
                    variant={"secondary"}
                    onClick={() => {
                      toast.promise(
                        fetch(url + `?nocache=${Date.now()}`, {
                          headers: {
                            Authorization:
                              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzIzYmFiNjEyZGQ2ODE0ZGU5N2NhNTM3NjliOGZmMiIsInN1YiI6IjY1MTVlYjBkY2FkYjZiMDJiZjAxMWZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8m-XSM_5y3xP3UwfhDD_kmM54SU5NW0c9Oe_j_BZhdQ",
                          },
                        }),
                        {
                          loading: `Checking connection to ${hostname}...`,
                          success: () => {
                            return `Connected to ${hostname} successfully.`;
                          },
                          error: `Failed to connect to ${hostname}.`,
                        },
                      );
                    }}
                  >
                    Check
                  </Button>
                </div>
                {i !== tmdb.length - 1 && <Separator />}
              </>
            );
          })}
        </CardContent>
      </Card>
    </main>
  );
}

export default App;
