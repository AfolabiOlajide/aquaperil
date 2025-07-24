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
            <div className="p-6">
                <Card className="max-w-6xl mx-auto my-[3rem] ">
                    <CardHeader>
                        <CardTitle className="text-2xl text-teal-600">
                            Story Line
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-teal-50 p-6 rounded-lg space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-teal-600">
                                    Core concepts
                                </h3>
                                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                                    <p>
                                        The player is a skilled engineer/hero on
                                        a desperate mission to reactivate a
                                        critical dam before their city is
                                        completely submerged and overrun by
                                        aquatic predators. The only path to the
                                        dam is a perilously damaged bridge,
                                        requiring precise geometric calculations
                                        to repair.
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-xl font-semibold mb-3 text-teal-600">
                                    Game Intro
                                </h3>
                                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                                    <p>
                                        "Once, our city thrived, nestled by the
                                        great River Aether. But then came the
                                        Great Deluge, a monstrous tsunami that
                                        swallowed our streets, turning them into
                                        treacherous canals. For a time, the
                                        Mighty Aether Dam held the tide, pushing
                                        back the waters, and our lives returned
                                        to a fragile normal.
                                        <br />
                                        <br />
                                        But disaster has struck again! The dam's
                                        ancient mechanisms have failed, and the
                                        waters surge once more, bringing with
                                        them the silent threat of the deep:
                                        sharks, crocodiles, and worse, now
                                        prowling our submerged boulevards. Our
                                        last hope lies with you. The only way to
                                        reach the failing dam is across the
                                        'Bridge of Whispers,' but it lies
                                        shattered in countless places.
                                        <br />
                                        <br />
                                        Each broken section is a geometric
                                        puzzle, demanding your sharpest mind to
                                        rebuild. The city's fate, and the safety
                                        of its people, rests on your ability to
                                        calculate, construct, and reach the dam
                                        before the last breath is drawn. Good
                                        luck, engineer. <b>The water rises</b>."
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-teal-600">
                                    The Goal
                                </h3>
                                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                                    <p>
                                        The primary goal is to reach the Aether
                                        Dam and reactivate its control system by
                                        successfully traversing and repairing
                                        the <b>'Bridge of Whispers'</b>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="section max-w-6xl mx-auto p-6 mt-[1rem]">
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
            <div className="p-6">
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
                                                Stone wall Image from
                                                pngtree.com
                                            </a>
                                        </li>
                                        <li>
                                            •{" "}
                                            <a
                                                href="https://www.flaticon.com/free-icons/confetti"
                                                title="confetti icons"
                                                className="underline"
                                            >
                                                Confetti icons created by
                                                Freepik - Flaticon
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
