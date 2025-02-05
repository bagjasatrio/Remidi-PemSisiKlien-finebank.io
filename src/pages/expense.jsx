
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const ExpensePage = () => {
  return (
    <MainLayout type="expense">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-1 md:gap-x-6">
        <Card title="Expenses Comparison"
            variant = "md:col-span-3 text-primary" 
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, tempora tempore? Voluptatibus ullam tempora corporis cupiditate accusamus, id nam tenetur repellendus ad veniam. Temporibus, vero iure laborum veritatis molestias nostrum."
        />
        <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card 
          title="Expenses Breakdown" 
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum dolorem impedit quam hic dolore nam eos, corporis qui consectetur placeat id, vitae rem magni repudiandae reprehenderit maiores veniam saepe!"
        />
        <Card title="&nbsp;"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis possimus excepturi temporibus deserunt modi nam velit quos, ad facere dignissimos in accusamus, libero doloribus impedit ab. Culpa saepe dignissimos explicabo?" />
        <Card title="&nbsp;"
        />
      </div>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card />
        <Card />
        <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eaque. Sed, voluptatibus officiis earum maxime deserunt quia eligendi, deleniti fugit vitae accusamus porro sequi. Debitis quos in ut? Provident, magni." />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default ExpensePage;