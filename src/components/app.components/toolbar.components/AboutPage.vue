<template>
  <div class="about-us">
    <div class="about-us-container">
      <div id="firstscreen">
        <div id="leftcontainer">
          <button class="main-container" @click="onRegisterButtonClick">
            <div class="main-container-text">Попробуйте уже сейчас</div>
            <div class="image-wrapper">
              <img class="image" loading="lazy" src="../../../assets/images/Group%2048097054.svg"/>
            </div>
          </button>
          <div id="text-block">
            <p class="title-1">
              ИНТЕЛЛЕКТУАЛЬНЫЙ ПОМОЩНИК<br> ИНЖЕНЕРА ПО ОБСЛЕДОВАНИЮ<br> ЗДАНИЙ —
              <span class="red-border">
                Checkpoint-K
              </span>
            </p>
            <p class="text-1">
              Команда checkpoint-k разрабатывает интеллектуальный помощник, который пишет отчет за вас и помогает на
              объекте. Протестируйте прототип уже сейчас и запишитесь на апробацию полной версии.
            </p>
          </div>
          <div style="justify-content: flex-start; align-items: center; gap: 35px; display: inline-flex">
            <button class="start-button"
                    @click="onRegisterButtonClick">
              <div style="justify-content: center; align-items: center; gap: 10px; display: flex">
                <div class="start-button-text">
                  Начало работы
                </div>
                <img src="../../../assets/images/start.svg" style="width: 16px; height: 16px; position: relative">
              </div>
            </button>
          </div>
          <a class="link-1"
             href="https://disk.yandex.ru/i/ddmHnRFgOmQ73A"
          >Инструкция по работе</a>
        </div>

        <div class="gif">
          <img class="gif-img" src="../../../assets/images/Checkpoint-K_Screen_Render_resize.gif"/>
          <div class="red-dies die-1">
            <p class="die-text">
              Анализирует <br>техническое задание</p>
          </div>
          <div class="red-dies die-2">
            <p class="die-text">
              Составляет <br/>программу работ
            </p>
          </div>
          <div class="red-dies die-3">
            <p class="die-text">
              Помогает на объекте
            </p>
          </div>
          <div class="red-dies die-4">
            <p class="die-text">
              Делает всю <br/>аналитику и рассчеты
            </p>
          </div>
          <div class="red-dies die-5">
            <p class="die-text">
              Пишет и выдает отчет<br/>по одной кнопке
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card-container">
      <div class="card">
        <div class="card-content">
          <div class="icon">
            <img alt="Analytics Icon" src="../../../assets/images/analytics.svg">
          </div>
          <div class="text-card-2">
            <div class="title-card-2">Аналитика</div>
            <div class="description">
              Комплексный анализ с учетом конкретной ситуации на объекте, формирование выводов и рекомендаций
            </div>
          </div>
        </div>
        <div class="cta">
          <div class="link">
            <div class="link-text">Узнать больше</div>
            <div class="icon-container">
              <div class="icon-wrapper">
                <img alt="Link Icon" src="../../../assets/images/Group%2048097054.svg">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <div class="icon">
            <div class="icon-wrapper">
              <img alt="Photo Icon" src="../../../assets/images/photo.svg">
            </div>
          </div>
          <div class="text-card-2">
            <div class="title-card-2">Описание фото</div>
            <div class="description">
              Инструменты распознавания дефектов выявляют их на фото и описывают в отчете
            </div>
          </div>
        </div>
        <div class="cta">
          <div class="link">
            <div class="link-text">Узнать больше</div>
            <div class="icon-container">
              <div class="icon-wrapper">
                <img alt="Link Icon" src="../../../assets/images/Group%2048097054.svg">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <div class="icon">
            <div class="icon-wrapper">
              <img alt="Drawing Icon" src="../../../assets/images/drawing.svg">
            </div>
          </div>
          <div class="text-card-2">
            <div class="title-card-2">Отметки на чертежах</div>
            <div class="description">
              Используйте наше приложение на объекте для съемки и получите готовый dwg-файл с отметками фото
            </div>
          </div>
        </div>
        <div class="cta">
          <div class="link">
            <div class="link-text">Узнать больше</div>
            <div class="icon-container">
              <div class="icon-wrapper">
                <img alt="Link Icon" src="../../../assets/images/Group%2048097054.svg">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="icon">
            <div class="icon-wrapper">
              <img alt="Audio Icon" src="../../../assets/images/audio.svg">
            </div>
          </div>
          <div class="text-card-2">
            <div class="title-card-2">Аудиоконтекст</div>
            <div class="description">
              Опишите обстановку на объекте, а ИИ опишет это научным языком по нормативным документам
            </div>
          </div>
        </div>
        <div class="cta">
          <div class="link">
            <div class="link-text">Узнать больше</div>
            <div class="icon-container">
              <div class="icon-wrapper">
                <img alt="Link Icon" src="../../../assets/images/Group%2048097054.svg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-container-3">
      <div class="image-container-1">
        <img alt="Image Description" class="img-left"
             src="../../../assets/images/Checkpoint-K_Screen_Render_resize.gif">
      </div>
      <div class="content-container-1">
        <div class="section">
          <div class="sub-section">
            <div class="card-3">
              <div class="title-3">Как это работает</div>
            </div>
            <div class="subtitle">
              Использование <span class="highlight">современных инструментов ИИ</span> на базе теории и практики
            </div>
          </div>
          <div class="sub-section">
            <div class="long-text">
              Мы соединили современные инструменты искусственного интеллекта со значительной теоретической и
              практической базой инженерного обследования зданий и сооружений. В результате становится возможным
              упростить
              камеральную обработку до минимума действий.
            </div>
          </div>
          <div class="sub-section">
            <div class="list-container">
              <div class="list-item">
                <div class="bullet">
                  <div>1</div>
                </div>
                <div class="description-1">Создаете проект и загружаете техническое задание</div>
              </div>
              <div class="list-item">
                <div class="bullet">
                  <div>2</div>
                </div>
                <div class="description-1">Формируете программу работ</div>
              </div>
              <div class="list-item">
                <div class="bullet">
                  <div>3</div>
                </div>
                <div class="description-1">Проводите обследование с нашим приложением</div>
              </div>
              <div class="list-item">
                <div class="bullet">
                  <div>4</div>
                </div>
                <div class="description-1">Загружаете фотографии, результаты измерений и иные данные</div>
              </div>
              <div class="list-item">
                <div class="bullet">
                  <div>5</div>
                </div>
                <div class="description-1">Запускаете ИИ и получаете отчет высокой степени готовности по ГОСТ 31937
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-container-4">
      <div class="section-container">
        <div class="highlight-box">
          <p class="section-title">преимущества сервиса</p>
        </div>
        <p>
          <span class="main-title">Ценности и преимущества <br/></span>
          <span class="main-title-1">при работе с Checkpoint-K</span>
        </p>
      </div>
      <div class="sub-container">
        <div class="feature-box">
          <!-- Feature 1 -->
          <div class="feature">
            <div class="feature-icon">
              <div class="icon-container">
                <img alt="More Objects Icon" src="../../../assets/images/moreobjects.svg">
              </div>
              <div class="feature-title">Больше объектов</div>
            </div>
            <div class="feature-description">
              Сервис сокращает срок работ на 30-60% без потери качества, что позволяет брать новые объекты и повышать
              прибыль
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="feature">
            <div class="feature-icon">
              <div class="icon-container">
                <img alt="Calm Icon" src="../../../assets/images/calm.svg">
              </div>
              <div class="feature-title">Спокойствие</div>
            </div>
            <div class="feature-description">
              Аналитика сервиса и написание отчета основаны на значительной теоретической базе и обосновании через
              нормативную базу
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="feature">
            <div class="feature-icon">
              <div class="icon-container">
                <img alt="Universe Icon" src="../../../assets/images/universe.svg">
              </div>
              <div class="feature-title">Универсальность</div>
            </div>
            <div class="feature-description">
              Работайте с объектами обследования по всему миру и не переживайте за адаптацию к местным
              условиям
            </div>
          </div>
        </div>

        <div class="feature-box">
          <!-- Feature 4 -->
          <div class="feature">
            <div class="feature-icon">
              <div class="icon-container">
                <img alt="Knowledge Icon" src="../../../assets/images/knowledge.svg">
              </div>
              <div class="feature-title">Знание как делать</div>
            </div>
            <div class="feature-description">
              Сервис подскажет как действовать и что учесть, ориентируясь на опыт обследования последних лет собранный в
              1 месте
            </div>
          </div>

          <!-- Feature 5 -->
          <div class="feature">
            <div class="feature-icon">
              <div class="icon-container">
                <img alt="Quality Icon" src="../../../assets/images/quality.svg">
              </div>
              <div class="feature-title">Качество</div>
            </div>
            <div class="feature-description">
              Не бойтесь что-то упустить из-за огромного массива информации. Доверьте обработку таких объемов ИИ без
              ошибок
            </div>
          </div>

          <!-- Feature 6 -->
          <div class="feature">
            <div class="feature-icon">
              <div class="icon-container">
                <img alt="Rapidity Icon" src="../../../assets/images/rapidity.svg">
              </div>
              <div class="feature-title">Быстрота внедрения</div>
            </div>
            <div class="feature-description">
              Никаких сложных настроек, интуитивный интерфейс, созданный инженерами для инженеров. Убедитесь на личном
              опыте
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="fifth-screen">
      <div class="text-container">
        <div class="main-text">
          <div class="main-text-container-5">
            <div class="shape">
              <p>
                будущее проекта</p>
            </div>
            <div class="colored-text"><span
                class="red">Что вас ждёт </span><span
                class="black">в ближайшем будущем</span>
            </div>
          </div>
        </div>
        <div class="text-description">
          Сервис checkpoint-k разрабатывается командой профессиональных программистов и инженеров с большим опытом, и мы
          нацелены на скорый охват значительно большего функционала. Вот наша дорожная карта на 2024 год
        </div>
      </div>
      <div class="timeline">
        <div class="time-line-container">
          <div class="june">
            <div class="title-5">
              Июнь 2024
            </div>
            <div class="text-5 text-changable">
              Расчетный модуль<br/>Распознавание дефектов на металлоконструкциях<br/>Проверка здания на нормативы
            </div>
          </div>
          <div class="february">
            <div class="title-5">
              Февраль 2024
            </div>
            <div class="text-5">
              Распознавание дефектов на каменных и ж.б. конструкциях<br/>Маркировка дефектов в приложении<br/>Анализ
              архивной документации
            </div>
          </div>
          <div class="october">
            <div class="title-5">
              Октябрь 2024
            </div>
            <div class="text-5">
              Анализ ТЗ и программы работ<br/>Распознавание дефектов на деревянных конструкциях<br/>Выпуск полной версии
            </div>
          </div>
          <div class="next-year">
            <div class="title-5">
              2025+
            </div>
            <div class="text-5 text-changable">
              Разработка новых модулей<br/>Адаптация под специальные задачи<br/>Более мощный ИИ<br/>Зарубежные
              нормативные базы
            </div>
          </div>
        </div>
        <div class="line">
          <div class="red-line"></div>
          <div class="dod-container">
            <div class="dod">
              <div class="big-round"></div>
              <div class="small-round"></div>
            </div>
            <div class="dod">
              <div class="big-round"></div>
              <div class="small-round"></div>
            </div>
            <div class="dod">
              <div class="big-round"></div>
              <div class="small-round"></div>
            </div>
            <div class="dod">
              <div class="big-round"></div>
              <div class="small-round"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sixth-screen">
      <div class="left-container">
        <div class="left-text">
          <div class="text-1">
            <p>
              Вы готовы?
            </p>
          </div>
          <div class="text-2">
            Ваша история
            <br>цифрового успеха<br>
            начинается здесь
          </div>
        </div>
        <button class="dialog-button" @click="onDialogButton">
          <div class="btn-background">
            <p>
              Начать сотрудничество
            </p>
            <div class="icn">
              <img src="../../../assets/images/start.svg">
            </div>
          </div>
        </button>
      </div>
      <img class="img-right" src="../../../assets/images/Checkpoint-K_Screen_Render_Red.gif"/>
    </div>
  </div>
  <v-dialog v-model="dialog">
    <v-row justify="center">
      <v-card style="border-radius: 25px" width="600">
        <v-row justify="center">
          <v-col class="text-fields" cols="10">
            <h3 style="text-align: center; padding-top: 3%">Сотрудничество</h3>
            <v-card-text>
              Оставьте свои контактные данные и кратко опишите запрос - пилот,
              инвестирование, сотрудничество,
              внедрение или иное. Мы с вами
              свяжемся и вышлем презентацию проекта
            </v-card-text>
            <v-form ref="form">
              <v-text-field
                  v-model="message.fullName"
                  :rules="[(value: String | Number) => !!value || /0/.test(value) || 'Обязательное поле']"
                  label="ФИО*"
                  variant="outlined"
              />
              <v-text-field
                  v-model="message.email"
                  :rules="[(value: String | Number) => !!value || /0/.test(value) || 'Обязательное поле']"
                  label="email*"
                  variant="outlined"
              />
              <v-text-field
                  v-model="message.number"
                  label="Контактный номер"
                  variant="outlined"
              />
              <v-text-field
                  v-model="message.companyName"
                  label="Компания"
                  variant="outlined"
              />
              <v-textarea
                  v-model="message.details"
                  label="Описание запроса"
                  variant="outlined"
              />
            </v-form>
            <v-card-actions style="justify-content: center; padding-bottom: 3%">
              <v-btn
                  color="#E03021"
                  style="border-radius: 25px;
              border-color: #E03021;
              align-content: center;"
                  variant="outlined"
                  @click="onSendMessage"
              >
                Отправить
              </v-btn>
              <v-btn
                  color="#181D2B"
                  style="border-radius: 25px;
              border-color: #181D2B;
              align-content: center;"
                  variant="outlined"
                  @click="onClose"
              >
                Отмена
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-dialog>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useStore} from "vuex";
import {VForm} from "../../../formType";

export default defineComponent({
  name: "AboutPage",
  setup() {
    const store = useStore();
    const dialog = ref(false);
    const message = ref({
      fullName: "",
      email: "",
      number: "",
      companyName: "",
      details: ""
    });
    const onDialogButton = () => {
      dialog.value = true;
    };
    const onSendMessage = () => {
      let data = message.value;
      if (message.value.fullName && message.value.email) {
        store.dispatch('users/sendMessage', data).then(() => {
          message.value = {
            fullName: "",
            email: "",
            number: "",
            companyName: "",
            details: ""
          }
          dialog.value = false
        })
      }
    };
    const onClose = () => {
      dialog.value = false;
      message.value = {
        fullName: "",
        email: "",
        number: "",
        companyName: "",
        details: ""
      }
    };
    return {
      dialog,
      onDialogButton,
      message,
      onSendMessage,
      onClose
    }
  },
  data() {
  },
  methods: {
    onRegisterButtonClick: function () {
      this.$router.push({name: 'RegisterPage'})
    },
  }
})
</script>

<style scoped>
</style>
