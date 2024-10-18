import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const initialMeals = [
    { id: 1, title: "Breakfast: Oatmeal", description: "A healthy start to your day with fiber and protein.", calories: 300, image: "/api/placeholder/100/100", category: "general" },
    { id: 2, title: "Lunch: Grilled Chicken Salad", description: "A lean source of protein with fresh vegetables.", calories: 400, image: "/api/placeholder/100/100", category: "general" },
    { id: 3, title: "Dinner: Quinoa Bowl", description: "Packed with nutrients, a perfect dinner option.", calories: 350, image: "/api/placeholder/100/100", category: "general" },
    { id: 4, title: "Snack: Greek Yogurt", description: "A tasty and healthy snack high in protein.", calories: 150, image: "/api/placeholder/100/100", category: "general" },
    { id: 5, title: "Dessert: Dark Chocolate", description: "A guilt-free indulgence with antioxidants.", calories: 100, image: "/api/placeholder/100/100", category: "general" },
    // Weight Loss Meals
    { id: 6, title: "Breakfast: Egg White Frittata", description: "Low-calorie, high-protein start to your day.", calories: 200, image: "/api/placeholder/100/100", category: "weight loss" },
    { id: 7, title: "Lunch: Lentil Soup", description: "Filling and nutritious with minimal calories.", calories: 250, image: "/api/placeholder/100/100", category: "weight loss" },
    { id: 8, title: "Dinner: Grilled Fish with Steamed Vegetables", description: "Lean protein with fiber-rich sides.", calories: 300, image: "/api/placeholder/100/100", category: "weight loss" },
    { id: 9, title: "Snack: Celery with Almond Butter", description: "Crunchy, satisfying snack with healthy fats.", calories: 100, image: "/api/placeholder/100/100", category: "weight loss" },
    // Body Recomposition Meals
    { id: 10, title: "Breakfast: Protein Pancakes", description: "High-protein, moderate-carb breakfast for muscle building.", calories: 400, image: "/api/placeholder/100/100", category: "body recomposition" },
    { id: 11, title: "Lunch: Turkey and Avocado Wrap", description: "Balanced meal with lean protein and healthy fats.", calories: 450, image: "/api/placeholder/100/100", category: "body recomposition" },
    { id: 12, title: "Dinner: Lean Beef Stir-Fry", description: "Iron-rich meal with a mix of protein and vegetables.", calories: 500, image: "/api/placeholder/100/100", category: "body recomposition" },
    { id: 13, title: "Snack: Cottage Cheese with Berries", description: "Protein-rich snack with antioxidants.", calories: 200, image: "/api/placeholder/100/100", category: "body recomposition" },
    // Strength Training Meals
    { id: 14, title: "Breakfast: Scrambled Eggs with Whole Grain Toast", description: "Protein-packed start with complex carbs.", calories: 450, image: "/api/placeholder/100/100", category: "strength training" },
    { id: 15, title: "Lunch: Chicken Breast with Sweet Potato", description: "Lean protein with nutrient-dense carbs.", calories: 550, image: "/api/placeholder/100/100", category: "strength training" },
    { id: 16, title: "Dinner: Salmon with Quinoa and Broccoli", description: "Omega-3 rich protein with complete protein grains.", calories: 600, image: "/api/placeholder/100/100", category: "strength training" },
    { id: 17, title: "Snack: Protein Shake with Banana", description: "Quick protein hit with fast-acting carbs.", calories: 300, image: "/api/placeholder/100/100", category: "strength training" },
];

const NutritionTracker = () => {
    const [meals, setMeals] = useState(initialMeals);
    const [searchTerm, setSearchTerm] = useState("");
    const [consumedMeals, setConsumedMeals] = useState([]);
    const [totalCalories, setTotalCalories] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        const newTotalCalories = consumedMeals.reduce((sum, meal) => sum + meal.calories, 0);
        setTotalCalories(newTotalCalories);
    }, [consumedMeals]);

    const filteredMeals = meals.filter(meal =>
        meal.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "all" || meal.category === selectedCategory)
    );

    const addMealToConsumed = (meal) => {
        setConsumedMeals([...consumedMeals, meal]);
    };

    const removeMealFromConsumed = (mealId) => {
        setConsumedMeals(consumedMeals.filter(meal => meal.id !== mealId));
    };

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-6">Nutrition Tracker</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
                <Input
                    type="text"
                    placeholder="Search meals..."
                    className="w-full max-w-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full max-w-[200px]">
                        <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="weight loss">Weight Loss</SelectItem>
                        <SelectItem value="body recomposition">Body Recomposition</SelectItem>
                        <SelectItem value="strength training">Strength Training</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {filteredMeals.map((meal) => (
                    <Card key={meal.id} className="w-64">
                        <CardHeader>
                            <img src={meal.image} alt={meal.title} className="w-16 h-16 mx-auto" />
                            <h3 className="font-semibold text-lg">{meal.title}</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600">{meal.description}</p>
                            <p className="font-medium mt-2">Calories: {meal.calories}</p>
                            <p className="text-sm text-gray-500 mt-1">Category: {meal.category}</p>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => addMealToConsumed(meal)} className="w-full">
                                Add to Consumed
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">Consumed Meals</h3>
                {consumedMeals.map((meal) => (
                    <div key={`consumed-${meal.id}`} className="flex justify-between items-center bg-white p-3 rounded-lg shadow mb-2">
                        <span>{meal.title} - {meal.calories} calories</span>
                        <Button variant="destructive" onClick={() => removeMealFromConsumed(meal.id)}>
                            Remove
                        </Button>
                    </div>
                ))}
                <div className="mt-4 text-xl font-bold">
                    Total Calories: {totalCalories}
                </div>
            </div>
        </div>
    );
};

export default NutritionTracker;