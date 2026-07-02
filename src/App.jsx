import Button from "@/shared/components/ui/Button";
import Input from "@/shared/components/ui/Input";
import Card from "@/shared/components/ui/Card";
import Badge from "@/shared/components/ui/Badge";
import Spinner from "@/shared/components/ui/Spinner";

function App() {
  return (
    <main className="container py-10">

      <div className="space-y-8">

        <Button>
          Order Now
        </Button>

        <Button variant="outline">
          View Menu
        </Button>

        <Input
          label="Search Food"
          placeholder="Pizza..."
        />

        <Badge color="success">
          Free Delivery
        </Badge>

        <Card>

          <h2 className="text-xl font-bold">
            Chicken Burger
          </h2>

          <p>
            ₹249
          </p>

        </Card>

        <Spinner />

      </div>

    </main>
  );
}

export default App;