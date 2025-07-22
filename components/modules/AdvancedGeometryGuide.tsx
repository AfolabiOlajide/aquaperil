import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AdvancedGeometryGuide() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl text-blue-600">
                        Advanced Geometry Concepts in Aqua Peril
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-purple-600">
                                Pythagorean Theorem
                            </h3>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <p className="text-gray-700 mb-2">
                                    <strong>Formula:</strong> c² = a² + b²
                                </p>
                                <p className="text-gray-700 mb-2">
                                    <strong>Or:</strong> c = √(a² + b²)
                                </p>
                                <p className="text-gray-600 text-sm">
                                    Used to find the length of the hypotenuse
                                    (longest side) in a right triangle when you
                                    know the lengths of the other two sides.
                                </p>
                                <div className="mt-3 p-3 bg-white rounded border-l-4 border-purple-400">
                                    <p className="text-sm font-medium text-purple-700">
                                        Example:
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        If a = 3m and b = 4m, then c = √(3² +
                                        4²) = √(9 + 16) = √25 = 5m
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-green-600">
                                Angle Calculations
                            </h3>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <p className="text-gray-700 mb-2">
                                    <strong>Trigonometric Functions:</strong>
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1 mb-3">
                                    <li>• tan(θ) = opposite ÷ adjacent</li>
                                    <li>• θ = arctan(opposite ÷ adjacent)</li>
                                    <li>
                                        • Convert radians to degrees: × (180/π)
                                    </li>
                                </ul>
                                <div className="mt-3 p-3 bg-white rounded border-l-4 border-green-400">
                                    <p className="text-sm font-medium text-green-700">
                                        Example:
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        If opposite = 6m and adjacent = 8m, then
                                        θ = arctan(6/8) = arctan(0.75) ≈ 36.87°
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-orange-600">
                                Right Triangle Angles
                            </h3>
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <p className="text-gray-700 mb-2">
                                    <strong>Key Rules:</strong>
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1 mb-3">
                                    <li>
                                        • Sum of all angles in any triangle =
                                        180°
                                    </li>
                                    <li>
                                        • Right triangles have one 90° angle
                                    </li>
                                    <li>
                                        • The other two angles must add up to
                                        90°
                                    </li>
                                    <li>
                                        • These are called complementary angles
                                    </li>
                                </ul>
                                <div className="mt-3 p-3 bg-white rounded border-l-4 border-orange-400">
                                    <p className="text-sm font-medium text-orange-700">
                                        Example:
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        If one angle is 35°, the other acute
                                        angle is 90° - 35° = 55°
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-red-600">
                                Problem-Solving Strategy
                            </h3>
                            <div className="bg-red-50 p-4 rounded-lg">
                                <p className="text-gray-700 mb-2">
                                    <strong>Step-by-Step Approach:</strong>
                                </p>
                                <ol className="text-sm text-gray-600 space-y-1 mb-3 list-decimal list-inside">
                                    <li>Identify what type of problem it is</li>
                                    <li>Write down the given information</li>
                                    <li>Choose the correct formula</li>
                                    <li>Substitute the known values</li>
                                    <li>Calculate step by step</li>
                                    <li>Check if your answer makes sense</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl text-indigo-600">
                        Real-World Applications
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-indigo-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-indigo-700 mb-2">
                                Construction & Engineering
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>
                                    • Calculating roof angles and support beam
                                    lengths
                                </li>
                                <li>
                                    • Determining diagonal bracing for
                                    structures
                                </li>
                                <li>• Bridge design and load calculations</li>
                            </ul>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-indigo-700 mb-2">
                                Navigation & GPS
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Calculating distances between points</li>
                                <li>
                                    • Determining angles for satellite
                                    positioning
                                </li>
                                <li>• Flight path calculations</li>
                            </ul>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-indigo-700 mb-2">
                                Computer Graphics
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• 3D modeling and animation</li>
                                <li>• Game physics calculations</li>
                                <li>• Camera angle positioning</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl text-teal-600">
                        Learning Objectives
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-teal-700 mb-3">
                                Knowledge Goals
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                                <li>
                                    • Master the Pythagorean theorem and its
                                    applications
                                </li>
                                <li>
                                    • Understand trigonometric relationships in
                                    right triangles
                                </li>
                                <li>
                                    • Calculate angles using inverse
                                    trigonometric functions
                                </li>
                                <li>
                                    • Apply angle sum properties in triangles
                                </li>
                                <li>
                                    • Solve complex composite shape problems
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-teal-700 mb-3">
                                Skill Development
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                                <li>
                                    • Improve spatial reasoning and
                                    visualization
                                </li>
                                <li>
                                    • Develop systematic problem-solving
                                    approaches
                                </li>
                                <li>
                                    • Build confidence with advanced
                                    mathematical concepts
                                </li>
                                <li>
                                    • Connect abstract math to real-world
                                    scenarios
                                </li>
                                <li>
                                    • Practice precision in calculations and
                                    measurements
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl text-amber-600">
                        Tips for Success
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="bg-amber-50 p-6 rounded-lg">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-amber-700 mb-3">
                                    For Pythagorean Theorem:
                                </h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>
                                        • Always identify which side is the
                                        hypotenuse (longest side, opposite the
                                        right angle)
                                    </li>
                                    <li>
                                        • Remember to take the square root at
                                        the end
                                    </li>
                                    <li>
                                        • Check your answer: the hypotenuse
                                        should be longer than either leg
                                    </li>
                                    <li>
                                        • Common Pythagorean triples: 3-4-5,
                                        5-12-13, 8-15-17
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-amber-700 mb-3">
                                    For Angle Calculations:
                                </h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>
                                        • Make sure your calculator is in degree
                                        mode
                                    </li>
                                    <li>
                                        • Double-check which sides are opposite
                                        and adjacent to your angle
                                    </li>
                                    <li>
                                        • Angles in a triangle should add up to
                                        180°
                                    </li>
                                    <li>
                                        • Use estimation to check if your answer
                                        is reasonable
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
