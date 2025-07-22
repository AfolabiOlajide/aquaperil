import { AdvancedGeometryGuide } from "@/components/modules/AdvancedGeometryGuide";
import { EducationalGuide } from "@/components/modules/EducationalGuide";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Home() {
    return (
        <main className="pt-12">
            <header className="text-5xl font-bold text-center font-bitcount-grid-double">
                Aqua Peril: The Last Bridge
            </header>
            <div className="play-game mx-auto w-fit mt-[2rem]">
                <Link href={"/game"}>
                    <Button className="cursor-pointer">Launch Game</Button>
                </Link>
            </div>
            <div className="section max-w-6xl mx-auto p-6 mt-[3rem]">
                <Tabs defaultValue="advanced">
                    <TabsList>
                        <TabsTrigger value="advanced">
                            Advanced Geometry Guide
                        </TabsTrigger>
                        <TabsTrigger value="educational">
                            Educational Guide
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="advanced">
                        <AdvancedGeometryGuide />
                    </TabsContent>
                    <TabsContent value="educational">
                        <EducationalGuide />
                    </TabsContent>
                </Tabs>
            </div>
            {/* attributes */}
            <Card className="max-w-6xl mx-auto my-[3rem] ">
                <CardHeader>
                    <CardTitle className="text-2xl text-teal-600">
                        Attributes
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="bg-teal-50 p-6 rounded-lg">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>
                                        •{" "}
                                        <a
                                            href="https://pngtree.com/freepng/architecture-stone-texture-wall_3591633.html"
                                            className="underline"
                                        >
                                            Stone wall Image from pngtree.com
                                        </a>
                                    </li>
                                    <li>
                                        •{" "}
                                        <a
                                            href="https://www.flaticon.com/free-icons/confetti"
                                            title="confetti icons"
                                            className="underline"
                                        >
                                            Confetti icons created by Freepik -
                                            Flaticon
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}
