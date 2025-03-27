import NavBar from "@/components/NavBar";
function AllComponents() {
  return (
    <main>
      <NavBar />
      <section id="home" className="h-screen">
        <div className="bg-blue-500">Home Page</div>
      </section>

      <section id="about" className="h-screen">
        <div className="bg-green-500">About Section</div>
      </section>

      <section id="projects" className="h-screen">
        <div className="bg-purple-500">Projects Section</div>
      </section>

      <section id="contact" className="h-screen">
        <div className="bg-pink-500">Contact Section</div>
      </section>
    </main>
  );
}
export default AllComponents;
