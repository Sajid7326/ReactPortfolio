import React, { useState } from "react";

const posts = [
  {
    title: "Visioning Scenario Development",
    author: "Shoabul",
    image: "/blog/1.jpg",
    excerpt:
      "A behind-the-scenes from Visioning Scenario Development Workshop organised by Tomorrow's Cities. Future Visioning is the official start of the TCDSE framework...",
    content:
      "A behind-the-scenes from Visioning Scenario Development Workshop organised by Tomorrow's Cities. Future Visioning is the official start of the TCDSE framework. It is a people-centred participatory methodology aimed at amplifying marginalised voices and capturing diverse social aspirations towards more inclusive and equitable urban futures.",
  },
  {
    title: "Land Use Classification Mapping: A GIS Perspective (1995)",
    author: "Shoabul",
    image: "/blog/2.jpg",
    excerpt:
      "An unsupervised land use classification map showing water bodies, farmland, vegetation, barren land, and built-up areas using GIS techniques.",
    content:
      "This work demonstrates an unsupervised land use classification approach to identify water bodies, farmland, vegetation, barren land, and built-up areas. It reflects how GIS and remote sensing can be used to understand spatial patterns and land use distribution from satellite imagery.",
  },
  {
    title: "Community-Based Land Use Planning: Hand-Drawn Zoning Map",
    author: "Shoabul",
    image: "/blog/3.jpg",
    excerpt:
      "A manually prepared planning map focusing on community facilities, housing, green spaces, and infrastructure along the river corridor.",
    content:
      "This hand-drawn planning map was prepared during group work to visualize land use, community facilities, housing areas, green spaces, and infrastructure. It reflects participatory planning concepts translated into a spatial layout.",
  },
  {
    title: "Integrating Satellite Data with Planning Proposals",
    author: "Shoabul",
    image: "/blog/4.jpg",
    excerpt:
      "An exercise combining satellite imagery interpretation with planning logic to support zoning and development decisions.",
    content:
      "This exercise integrates satellite imagery interpretation with planning logic to identify industrial zones, settlements, green areas, and service locations, bridging GIS analysis with practical urban planning decisions.",
  },
  {
    title: "Past, Present, and Future: Comparative Urban Analysis",
    author: "Shoabul",
    image: "/blog/5.jpg",
    excerpt:
      "A comparative timeline showing how urban form, environment, and infrastructure evolve over time toward a more sustainable future.",
    content:
      "This comparative analysis highlights how urban form, environment, and infrastructure evolve over time, showing challenges of the present and aspirations for a more sustainable and resilient future city.",
  },
  {
    title: "Participatory Planning Workshop: Ideas on the Table",
    author: "Shoabul",
    image: "/blog/6.jpg",
    excerpt:
      "Snapshots from a participatory planning session where stakeholder ideas were organized into structured planning strategies.",
    content:
      "This participatory planning session shows how stakeholder ideas were organized using sticky notes and visual tools, helping translate community needs and perspectives into structured planning strategies.",
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openPost = (post) => {
    setSelectedPost(post);
    document.body.classList.add("modal-open");
  };

  const closePost = () => {
    setSelectedPost(null);
    document.body.classList.remove("modal-open");
  };

  return (
    <section className="relative w-full py-24 px-10 bg-white text-slate-900 dark:bg-black dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl text-center font-bold mb-3">
            Blog
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-center mt-5 mb-10 max-w-2xl mx-auto">
            Thoughts, stories, and insights from my work in GIS, urban planning and research.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-400/40 transition"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400 mb-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  <span>{post.author}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-cyan-400 transition">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <button
                  onClick={() => openPost(post)}
                  className="text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition"
                >
                  Read full post →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
{selectedPost && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-300"
    onClick={closePost}
  >
    <div
      className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto
                 transform transition-all duration-300 ease-out scale-100 opacity-100 animate-modal-in"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-6">
        <button
          onClick={closePost}
          className="text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white mb-4"
        >
          ✕ Close
        </button>

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {selectedPost.title}
        </h2>

        <img
          src={selectedPost.image}
          alt={selectedPost.title}
          className="w-full rounded-xl mb-6"
        />

        <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
          {selectedPost.content}
        </p>
      </div>
    </div>
  </div>
)}
    </section>
  );
};

export default Blog;