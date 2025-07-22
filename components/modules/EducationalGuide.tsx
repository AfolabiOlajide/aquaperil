import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function EducationalGuide() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl text-blue-600">
                        Geometry Concepts in Aqua Peril
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            Rectangle Area
                        </h3>
                        <p className="text-gray-700 mb-2">
                            <strong>Formula:</strong> Area = width × height
                        </p>
                        <p className="text-gray-600">
                            Used for calculating floor panels, wall sections,
                            and rectangular bridge components.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            Triangle Area
                        </h3>
                        <p className="text-gray-700 mb-2">
                            <strong>Formula:</strong> Area = (base × height) ÷ 2
                        </p>
                        <p className="text-gray-600">
                            Essential for triangular support beams and
                            structural reinforcements.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            Circle Circumference
                        </h3>
                        <p className="text-gray-700 mb-2">
                            <strong>Formula:</strong> Circumference = 2πr
                        </p>
                        <p className="text-gray-600">
                            Critical for circular gears, pipes, and mechanical
                            components.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            Composite Shapes
                        </h3>
                        <p className="text-gray-700 mb-2">
                            <strong>Strategy:</strong> Break complex shapes into
                            simpler components
                        </p>
                        <p className="text-gray-600">
                            Advanced bridge sections require combining multiple
                            geometric calculations.
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl text-green-600">
                        Learning Objectives
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 text-gray-700">
                        <li>• Master 2D geometry measurement formulas</li>
                        <li>
                            • Apply mathematical concepts to real-world
                            scenarios
                        </li>
                        <li>• Develop problem-solving skills under pressure</li>
                        <li>• Build confidence in geometric calculations</li>
                        <li>• Experience immediate feedback and correction</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}
