const loadPosts = async () => {
  try {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const showPost = data.posts;

    const showPostContainer = document.getElementById('posts-container');
    showPostContainer.innerHTML = '';

    showPost.forEach(post => {
      const div = document.createElement('div');
      div.className = 'card bg-base-100 shadow-md border border-gray-200 rounded-2xl p-4 sm:p-6';

      div.innerHTML = `
        <div class="flex gap-4">
          <div class="relative w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
            <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover rounded-xl" />
            <span class="absolute top-1 right-1 w-3 h-3 ${post.isActive ? "bg-green-500" : "bg-red-500"} rounded-full border-2 border-white"></span>
          </div>

          <div class="flex-1">
            <div class="text-sm text-gray-500 mb-1">
              <span class="mr-2"># ${post.category}</span>
              <span>Author : ${post.author.name}</span>
            </div>

            <h2 class="font-semibold text-lg sm:text-xl text-gray-900">
              ${post.title}
            </h2>

            <p class="text-sm text-gray-600 mt-1">${post.description}</p>

            <div class="border-t border-gray-200 my-3"></div>

            <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span class="flex items-center gap-1"><i class="fa-regular fa-comment"></i>${post.comment_count}</span>
              <span class="flex items-center gap-1"><i class="fa-regular fa-eye"></i>${post.view_count}</span>
              <span class="flex items-center gap-1"><i class="fa-regular fa-clock"></i>${post.posted_time}</span>
              <button class="btn btn-circle btn-sm bg-green-500 hover:bg-green-600 text-white ml-auto">
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      `;
      showPostContainer.appendChild(div);
    });
  } catch (error) {
    console.error("❌ Failed to load posts:", error);
  }
};


loadPosts();
