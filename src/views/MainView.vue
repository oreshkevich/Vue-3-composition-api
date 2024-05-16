<template>
  <div class="home">
    <div class="home__wrapper">
      <div class="home__filters">
        <input
          v-model="state.nameFilter"
          type="text"
          placeholder="Имя персонажа"
        />
        <select v-model="state.statusFilter" class="select">
          <option value="">Статус</option>
          <option value="alive">Живой</option>
          <option value="dead">Мертвый</option>
          <option value="unknown">Неизвестно</option>
        </select>
        <button class="home__button" @click="applyFilter">Применить</button>
      </div>
    </div>

    <template v-if="state.catalog.length">
      <section class="characters-list">
        <div class="characters-list__wrapper">
          <CategoryList :catalog="state.catalog" />
        </div>
      </section>
    </template>

    <template v-else>
      <PreloaderFood />
    </template>
    <div class="home__pagination">
      <button
        class="home__button"
        :disabled="state.currentPage === 1"
        @click="prevPage"
      >
        Предыдущая
      </button>
      <button
        class="home__button"
        :disabled="state.currentPage === state.pageCountSize - 1"
        @click="nextPage"
      >
        Следующая
      </button>
    </div>
    <ModalError v-if="state.closeModal" @handleShow="handleShow" />
  </div>
</template>

<script setup>
import {getAllCategories, getFilteredCategory, getPaginated} from '@/api';
import CategoryList from '@/components/CategoryList.vue';
import PreloaderFood from '@/components/LoaderApp.vue';
import ModalError from '@/components/ErrorModal.vue';
import {ref, reactive, onMounted} from 'vue';

const state = reactive({
  catalog: [],
  nameFilter: '',
  statusFilter: '',
  currentPage: 1,
  totalPages: 0,
  closeModal: false,
});

const handleGet = () => {
  getAllCategories()
    .then((data) => {
      if (data && data.results) {
        state.catalog = data.results;
      } else {
        state.catalog = [];
      }

      if (data && data.info && data.info.pages) {
        state.totalPages = data.info.pages;
      } else {
        state.totalPages = 0;
      }
    })
    .catch((error) => {
      console.error('Error fetching categories:', error);
      state.closeModal = true;
    });
};

const handleGetFiltered = () => {
  getFilteredCategory(state.nameFilter, state.statusFilter)
    .then((data) => {
      state.catalog = data?.results ?? [];
      state.totalPages = data?.info?.pages ?? 0;
    })
    .catch((error) => {
      console.error('Error fetching filtered categories:', error);
      state.closeModal = true;
    });
};

const applyFilter = () => {
  handleGetFiltered();
};

const fetchData = async (page) => {
  try {
    const response = await getPaginated(page);
    state.catalog = response?.results ?? [];
    state.totalPages = response?.info?.pages ?? 0;
  } catch (error) {
    console.error('Error fetching paginated categories:', error);
    state.closeModal = true;
  }
};

const nextPage = () => {
  if (state.currentPage < state.totalPages) {
    state.currentPage++;
    fetchData(state.currentPage);
  }
};

const prevPage = () => {
  if (state.currentPage > 1) {
    state.currentPage--;
    fetchData(state.currentPage);
  }
};

const handleShow = () => {
  state.closeModal = false;
};

onMounted(() => {
  handleGet();
});
</script>

<style lang="scss">
.home__wrapper {
  display: flex;
  justify-content: center;
}
.home__filters {
  padding: 1rem 0px;
  display: flex;
  justify-content: space-between;
  width: 500px;
}
.characters-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4.5rem 0px;
  background: rgb(39, 43, 51);
  min-height: calc(-60px + 50vh);
}

.characters-list__wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 1920px;
}

.home__button {
  background: #230052;
  border: 1px solid #230052;
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
  font: inherit;
  padding: 0.5rem 2rem;
}

.home__button:active,
.home__button:hover {
  background-color: #460897;
  border-color: #460897;
}
.home__filters input {
  border: 1px solid #ccc;
  border-radius: 12px;
  display: block;
  font: inherit;
  padding: 0.2rem;
  width: 100%;
}
.home__filters .select {
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  padding: 0.2rem;
  width: 200px;
}
.home__pagination {
  margin: 10px;
}
.home__pagination .home__button {
  margin-right: 10px;
}
a:hover,
a:focus {
  color: rgb(255, 152, 0);
  text-decoration: none;
}
.home__button:hover:disabled {
  cursor: not-allowed;
}
.home__button:disabled {
  background-color: #a594bb;
}
@media (max-width: 767px) {
  .characters-list {
    flex-direction: column;
    align-items: center;
  }

  .characters-list__wrapper {
    max-width: 100%;
  }
}
@media (max-width: 450px) {
  .home__filters {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  .home__pagination {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
}
</style>

