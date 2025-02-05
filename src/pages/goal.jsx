import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const GoalPage = () => {
    return(
        <MainLayout type="goal">
            <div className="md:grid md:grid-cols-3 md:gap-x-6">
                <Card title="Goals" variant="col-span-1" />
                <Card
                    variant="md:col-span-2 teks-primary"
                    title="&nbsp;"
                    desc="Lorem ipsum donor sit amet consecterur adipisicing elit Lorem ipsum donor sit amet consecterur adipisicing elit"
                    />
                <Card title="Expense Goals by Category" />
                <Card title="&nbsp;"
                    desc="Lorem ipsum donor sit amet consecterur adipisicing elit Lorem ipsum donor sit amet consecterur adipisicing elit"
                    />
                <Card />
            </div>
        </MainLayout>
    )
}


export default GoalPage;