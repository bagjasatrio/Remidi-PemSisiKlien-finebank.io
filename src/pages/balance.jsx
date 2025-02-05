import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Balances" />
        <Card title="&nbsp;" />
        <Card 
          title="&nbsp;"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis possimus excepturi temporibus deserunt modi nam velit quos, ad facere dignissimos in accusamus, libero doloribus impedit ab. Culpa saepe dignissimos explicabo?"
        />
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eaque. Sed, voluptatibus officiis earum maxime deserunt quia eligendi, deleniti fugit vitae accusamus porro sequi. Debitis quos in ut? Provident, magni." />
        <Card />
        <Card />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default BalancePage;