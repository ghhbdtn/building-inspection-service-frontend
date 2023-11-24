<template>
  <div class="about-us">
    <div class="about-us-container">
      <div
          style="margin-bottom: 150px; width: 100%; height: 100%; justify-content: flex-start; align-items: center; gap: 94px; display: inline-flex">
        <div
            style="flex-direction: column; justify-content: center; align-items: flex-start; gap: 35px; display: inline-flex">
          <button class="main-container" @click="onRegisterButtonClick">
            <div class="title">Попробуйте бесплатно</div>
            <div class="image-wrapper">
              <img src="../../../assets/images/Group%2048097054.svg" class="image" loading="lazy"/>
            </div>
          </button>
          <div
              style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 50px; display: flex">
            <div
                style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: flex">
              <div
                  style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 45px; display: flex">
                <div style="flex-direction: column; justify-content: flex-start; align-items: flex-end; display: flex">
                  <div
                      style="width: 699px; color: #181D2B; font-size: 35px; font-family: TT Travels; font-weight: 700; text-transform: uppercase; line-height: 49px; letter-spacing: 1.05px; word-wrap: break-word">
                    ИНТЕЛЛЕКТУАЛЬНЫЙ ПОМОЩНИК<br> ИНЖЕНЕРА ПО ОБСЛЕДОВАНИЮ<br> ЗДАНИЙ —
                    <nobr
                        style="width: 330px; height: 50px; position: absolute; text-align: center; border-radius: 25px; border: 2px #E03021 solid;">
                      Checkpoint-K
                    </nobr>
                  </div>
                </div>
                <p
                    style="width: 570px; color: #616161; font-size: 18px; font-family: TT Travels; font-weight: 400; line-height: 29.70px; word-wrap: break-word">
                  Команда checkpoint-k разрабатывает интеллектуальный помощник, который пишет отчет за вас и помогает на
                  объекте. Протестируйте прототип уже сейчас и запишитесь на апробацию полной версии.
                </p>
              </div>
            </div>
            <div style="justify-content: flex-start; align-items: center; gap: 35px; display: inline-flex">
              <button
                  style="padding-left: 25px; padding-right: 25px; padding-top: 15px; padding-bottom: 15px; background: #E03021; border-radius: 25px; justify-content: center; align-items: center; gap: 10px; display: flex"
                  @click="onRegisterButtonClick">
                <div style="justify-content: center; align-items: center; gap: 10px; display: flex">
                  <div
                      style="color: white; font-size: 18px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
                    Начало работы
                  </div>
                  <img src="../../../assets/images/start.svg" style="width: 16px; height: 16px; position: relative">
                </div>
              </button>
            </div>
          </div>
        </div>
        <div style="width: 517.50px; height: 624px; position: relative">
          <img src="../../../assets/images/Checkpoint-K_Screen_Render_resize.gif"
               style="position: absolute; width: 517.50px; height: 624px"/>
          <div
              style="margin: 60px 72.25px;position: absolute; width: 203px; height: 60px; padding: 20px 25px;background: rgba(255, 189.59, 184.02, 0.30); border-radius: 25px; backdrop-filter: blur(80px); justify-content: center; align-items: center; gap: 15px; display: inline-flex">
            <p style="position: absolute; color: #E03021; font-size: 18px; font-family: TT Travels; font-weight: 600; line-height: 29.70px; word-wrap: break-word">
              Анализирует ТЗ</p>
          </div>
          <div
              style="position: absolute; margin: 165px 250.25px; width: 217px; height: 60px; padding: 12px 25px;background: rgba(255, 189.59, 184.02, 0.30); border-radius: 25px; backdrop-filter: blur(80px); justify-content: center; align-items: center; gap: 15px; display: inline-flex">
            <p
                style="text-align: right; color: #E03021; font-size: 18px; font-family: TT Travels; font-weight: 600; line-height: 23.40px; word-wrap: break-word">
              Составляет <br/>программу работ
            </p>
          </div>
          <div
              style="position: absolute; margin: 270px 72.25px; width: 253px; height: 60px; padding-left: 25px; padding-right: 25px; padding-top: 20px; padding-bottom: 20px; background: rgba(255, 189.59, 184.02, 0.30); border-radius: 25px; backdrop-filter: blur(80px); justify-content: center; align-items: center; gap: 15px; display: inline-flex">
            <p
                style="color: #E03021; font-size: 18px; font-family: TT Travels; font-weight: 600; line-height: 29.70px; word-wrap: break-word">
              Помогает на объекте
            </p>
          </div>
          <div
              style="position: absolute; margin: 375px 204.25px; width: 263px; height: 60px; padding-left: 25px; padding-right: 25px; padding-top: 12px; padding-bottom: 12px; background: rgba(255, 189.59, 184.02, 0.30); border-radius: 25px; backdrop-filter: blur(80px); justify-content: center; align-items: center; gap: 15px; display: inline-flex">
            <p
                style="text-align: right; color: #E03021; font-size: 18px; font-family: TT Travels; font-weight: 600; line-height: 23.40px; word-wrap: break-word">
              Делает всю <br/>аналитику и рассчеты
            </p>
          </div>
          <div
              style="position: absolute; margin: 480px 72.25px; width: 257px; height: 60px; padding-left: 25px; padding-right: 25px; padding-top: 12px; padding-bottom: 12px; background: rgba(255, 189.59, 184.02, 0.30); border-radius: 25px; backdrop-filter: blur(80px); justify-content: center; align-items: center; gap: 15px; display: inline-flex">
            <p
                style="color: #E03021; font-size: 18px; font-family: TT Travels; font-weight: 600; line-height: 23.40px; word-wrap: break-word">
              Пишет и выдает отчет<br/>по одной кнопке
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
        style="margin-bottom: 150px; width: 100%; height: 100%; justify-content: center; align-items: center; gap: 18px; display: inline-flex">
      <div
          style="padding-left: 38px; padding-right: 38px; padding-top: 45px; padding-bottom: 45px; background: white; border-radius: 25px; overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
        <div
            style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 35px; display: inline-flex">
          <div
              style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 35px; display: flex">
            <div
                style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 25px; display: flex">
              <div style="width: 50px; height: 50px; position: relative">
                <img src="../../../assets/images/analytics.svg">
              </div>
              <div
                  style="color: #181D2B; font-size: 21px; font-family: TT Travels; font-weight: 700; line-height: 34.65px; word-wrap: break-word">
                Аналитика
              </div>
            </div>
            <div
                style="width: 250px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
              Комплексный анализ с учетом конкретной ситуации на объекте, формирование выводов и рекомендаций
            </div>
          </div>
          <div style="justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
            <div
                style="color: #E03021; font-size: 16px; font-family: TT Travels; font-weight: 600; line-height: 26.40px; word-wrap: break-word">
              Узнать больше
            </div>
            <div style="justify-content: center; align-items: center; gap: 10px; display: flex">
              <div
                  style="width: 20px; height: 20px; background: rgba(255, 189.59, 184.02, 0.30); border-radius: 9999px; align-items: center">
                <img src="../../../assets/images/Group%2048097054.svg" style="position: relative; padding: 5px 4px">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
          style="padding-left: 38px; padding-right: 38px; padding-top: 45px; padding-bottom: 45px; background: white; border-radius: 25px; overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
        <div
            style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 35px; display: inline-flex">
          <div
              style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 35px; display: flex">
            <div
                style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 25px; display: flex">
              <div style="width: 50px; height: 50px; position: relative">
                <div style="width: 50px; height: 45.83px; left: 0px; top: 4.17px; position: absolute">
                  <img src="../../../assets/images/photo.svg">
                </div>
              </div>
              <div
                  style="color: #181D2B; font-size: 21px; font-family: TT Travels; font-weight: 700; line-height: 34.65px; word-wrap: break-word">
                Описание фото
              </div>
            </div>
            <div
                style="width: 239px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
              Инструменты распознавания дефектов выявляют их на фото и описывают в отчете
            </div>
          </div>
          <div style="justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
            <div
                style="color: #E03021; font-size: 16px; font-family: TT Travels; font-weight: 600; line-height: 26.40px; word-wrap: break-word">
              Узнать больше
            </div>
            <div style="justify-content: center; align-items: center; gap: 10px; display: flex">
              <div
                  style="width: 20px; height: 20px; background: rgba(255, 189.59, 184.02, 0.30); border-radius: 9999px">
                <div
                    style="width: 20px; height: 20px; background: rgba(255, 189.59, 184.02, 0.30); border-radius: 9999px; align-items: center">
                  <img src="../../../assets/images/Group%2048097054.svg" style="position: relative; padding: 5px 4px">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
          style="padding: 45px 38px;background: white; border-radius: 25px; overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
        <div
            style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 35px; display: inline-flex">
          <div
              style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 35px; display: flex">
            <div
                style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 25px; display: flex">
              <div style="width: 50px; height: 50px; position: relative">
                <div style="width: 50px; height: 50px; left: 0px; top: 0px; position: absolute">
                  <img src="../../../assets/images/drawing.svg">
                </div>
              </div>
              <div
                  style="color: #181D2B; font-size: 21px; font-family: TT Travels; font-weight: 700; line-height: 34.65px; word-wrap: break-word">
                Отметки на чертежах
              </div>
            </div>
            <div
                style="width: 239px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
              Используйте наше приложение на объекте для съемки и получите готовый dwg-файл с отметками фото
            </div>
          </div>
          <div style="justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
            <div
                style="color: #E03021; font-size: 16px; font-family: TT Travels; font-weight: 600; line-height: 26.40px; word-wrap: break-word">
              Узнать больше
            </div>
            <div style="justify-content: center; align-items: center; gap: 10px; display: flex">
              <div
                  style="width: 20px; height: 20px; background: rgba(255, 189.59, 184.02, 0.30); border-radius: 9999px">
                <div
                    style="width: 20px; height: 20px; background: rgba(255, 189.59, 184.02, 0.30); border-radius: 9999px; align-items: center">
                  <img src="../../../assets/images/Group%2048097054.svg" style="position: relative; padding: 5px 4px">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
          style="padding: 45px 38px;background: white; border-radius: 25px; overflow: hidden; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
        <div
            style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 35px; display: inline-flex">
          <div
              style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 35px; display: flex">
            <div
                style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 25px; display: flex">
              <div style="width: 53.33px; height: 50px; position: relative">
                <img src="../../../assets/images/audio.svg">
              </div>
              <div
                  style="color: #181D2B; font-size: 21px; font-family: TT Travels; font-weight: 700; line-height: 34.65px; word-wrap: break-word">
                Аудиоконтекст
              </div>
            </div>
            <div
                style="width: 239px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
              Опишите обстановку на объекте, а ИИ опишет это научным языком по нормативным документам
            </div>
          </div>
          <div style="justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex">
            <div
                style="color: #E03021; font-size: 16px; font-family: TT Travels; font-weight: 600; line-height: 26.40px; word-wrap: break-word">
              Узнать больше
            </div>
            <div style="justify-content: center; align-items: center; gap: 10px; display: flex">
              <div
                  style="width: 20px; height: 20px; background: rgba(255, 189.59, 184.02, 0.30); border-radius: 9999px">
                <div
                    style="width: 20px; height: 20px; background: rgba(255, 189.59, 184.02, 0.30); border-radius: 9999px; align-items: center">
                  <img src="../../../assets/images/Group%2048097054.svg" style="position: relative; padding: 5px 4px">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        style="margin-bottom: 150px; width: 100%; height: 100%; justify-content: center; align-items: center; gap: 87px; display: inline-flex">
      <div style="width: 527px; height: 633px; position: relative">
        <img src="../../../assets/images/Checkpoint-K_Screen_Render_resize.gif"
             style="width: 527px; height: 633px; left: 0px; top: 0px; position: absolute"/>
      </div>
      <div
          style="flex-direction: column; justify-content: center; align-items: flex-start; gap: 55px; display: inline-flex">
        <div
            style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 35px; display: flex">
          <div
              style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 35px; display: flex">
            <div
                style="padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; background: white; border-radius: 25px; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
              <div
                  style="color: black; font-size: 14px; font-family: TT Travels; font-weight: 600; text-transform: uppercase; line-height: 23.10px; word-wrap: break-word">
                как это работает
              </div>
            </div>
            <div style="width: 706px"><span
                style="color: #181D2B; font-size: 35px; font-family: TT Travels; font-weight: 700; text-transform: uppercase; line-height: 49px; letter-spacing: 1.05px; word-wrap: break-word">Использование </span><span
                style="color: #E03021; font-size: 35px; font-family: TT Travels; font-weight: 700; text-transform: uppercase; line-height: 49px; letter-spacing: 1.05px; word-wrap: break-word">современных инструментов ИИ</span><span
                style="color: #181D2B; font-size: 35px; font-family: TT Travels; font-weight: 700; text-transform: uppercase; line-height: 49px; letter-spacing: 1.05px; word-wrap: break-word"> на базе теории и практики</span>
            </div>
          </div>
          <div
              style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 45px; display: flex">
            <div
                style="width: 700px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
              Мы соединили современные инструменты искусственного интеллекта со значительной теоретической и
              практической базой инженерного обследования зданий и сооружений. В результате становится возможным
              упростить камеральную обработку до минимума действий:
            </div>
            <div
                style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
              <div
                  style="width: 706px; justify-content: flex-start; align-items: center; gap: 15px; display: inline-flex">
                <div style="justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                  <div style="width: 25px; height: 25px; background: #E03021; border-radius: 9999px">
                    <div
                        style="padding-left: 9px; color: white; font-size: 16px; font-family: TT Travels; font-weight: 700; line-height: 26.40px; word-wrap: break-word">
                      1
                    </div>
                  </div>
                </div>
                <div
                    style="width: 666px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
                  Создаете проект и загружаете техническое задание
                </div>
              </div>
              <div
                  style="width: 706px; justify-content: flex-start; align-items: center; gap: 15px; display: inline-flex">
                <div style="justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                  <div style="width: 25px; height: 25px; background: #E03021; border-radius: 9999px">
                    <div
                        style="padding-left: 7px; color: white; font-size: 16px; font-family: TT Travels; font-weight: 700; line-height: 26.40px; word-wrap: break-word">
                      2
                    </div>
                  </div>
                </div>
                <div
                    style="width: 666px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
                  Формируете программу работ
                </div>
              </div>
              <div
                  style="width: 706px; justify-content: flex-start; align-items: center; gap: 15px; display: inline-flex">
                <div style="justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                  <div style="width: 25px; height: 25px; background: #E03021; border-radius: 9999px">
                    <div
                        style="padding-left: 7px; color: white; font-size: 16px; font-family: TT Travels; font-weight: 700; line-height: 26.40px; word-wrap: break-word">
                      3
                    </div>
                  </div>
                </div>
                <div
                    style="width: 666px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
                  Проводите обследование с нашим приложением
                </div>
              </div>
              <div
                  style="width: 706px; justify-content: flex-start; align-items: center; gap: 15px; display: inline-flex">
                <div style="justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                  <div style="width: 25px; height: 25px; background: #E03021; border-radius: 9999px">
                    <div
                        style="padding-left: 7px; color: white; font-size: 16px; font-family: TT Travels; font-weight: 700; line-height: 26.40px; word-wrap: break-word">
                      4
                    </div>
                  </div>
                </div>
                <div
                    style="width: 666px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
                  Загружаете фотографии, результаты измерений и иные данные
                </div>
              </div>
              <div
                  style="width: 706px; justify-content: flex-start; align-items: center; gap: 15px; display: inline-flex">
                <div style="justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
                  <div style="width: 25px; height: 25px; background: #E03021; border-radius: 9999px">
                    <div
                        style="padding-left: 7px; color: white; font-size: 16px; font-family: TT Travels; font-weight: 700; line-height: 26.40px; word-wrap: break-word">
                      5
                    </div>
                  </div>
                </div>
                <div
                    style="width: 666px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
                  Запускаете ИИ и получаете отчет высокой степени готовности по ГОСТ 31937
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        style="margin-bottom: 150px; width: 100%; height: 100%; flex-direction: column; justify-content: center; align-items: center;  gap: 65px; display: inline-flex;">
      <div
          style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 35px; display: inline-flex;">
        <div
            style="padding: 10px 20px;background: white; border-radius: 25px; justify-content: flex-start; align-items: flex-start; gap: 10px; display: inline-flex">
          <p
              style="color: black; font-size: 14px; font-family: TT Travels; font-weight: 600; text-transform: uppercase; line-height: 23.10px; word-wrap: break-word">
            преимущества сервиса
          </p>
        </div>
        <p style="width: 728px"><span
            style="color: #E03021; font-size: 35px; font-family: TT Travels; font-weight: 700; text-transform: uppercase; line-height: 49px; letter-spacing: 1.05px; word-wrap: break-word">Ценности и преимущества <br/></span><span
            style="color: #181D2B; font-size: 35px; font-family: TT Travels; font-weight: 700; text-transform: uppercase; line-height: 49px; letter-spacing: 1.05px; word-wrap: break-word">при работе с Checkpoint-K</span>
        </p>
      </div>
      <div
          style="flex-direction: column; justify-content: center; align-items: center; gap: 55px; display: flex">
        <div style="justify-content: flex-start; align-items: flex-start; gap: 55px; display: inline-flex">
          <div
              style="width: 404px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 30px; display: inline-flex">
            <div style="justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex">
              <div style="width: 40px; height: 40px; position: relative">
                <img src="../../../assets/images/moreobjects.svg">
              </div>
              <div
                  style="color: #181D2B; font-size: 20px; font-family: TT Travels; font-weight: 700; line-height: 33px; word-wrap: break-word">
                Больше объектов
              </div>
            </div>
            <div
                style="width: 395px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
              Сервис сокращает срок работ на 30-60% без потери качества, что позволяет брать новые объекты и повышать
              прибыль
            </div>
          </div>
          <div
              style="width: 404px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 30px; display: inline-flex">
            <div style="justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex">
              <div style="width: 40px; height: 40px; position: relative">
                <img src="../../../assets/images/calm.svg">
              </div>
              <div
                  style="width: 339px; color: #181D2B; font-size: 20px; font-family: TT Travels; font-weight: 700; line-height: 33px; word-wrap: break-word">
                Спокойствие
              </div>
            </div>
            <div
                style="width: 395px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
              Аналитика сервиса и написание отчета основаны на значительной теоретической базе и обосновании через
              нормативную базу
            </div>
          </div>
          <div
              style="width: 404px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 30px; display: inline-flex">
            <div style="justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex">
              <div style="width: 40px; height: 40px; position: relative">
                <img src="../../../assets/images/universe.svg">
              </div>
              <div
                  style="color: #181D2B; font-size: 20px; font-family: TT Travels; font-weight: 700; line-height: 33px; word-wrap: break-word">
                Универсальность
              </div>
            </div>
            <div
                style="width: 395px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
              Работайте с объектами обследования <br/>по всему миру и не переживайте <br/>за адаптацию к местным
              условиям
            </div>
          </div>
        </div>
        <div style="justify-content: flex-start; align-items: flex-start; gap: 55px; display: inline-flex">
          <div
              style="width: 404px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 30px; display: inline-flex">
            <div style="justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex">
              <div style="width: 40px; height: 40px; position: relative">
                <img src="../../../assets/images/knowledge.svg">
              </div>
              <div
                  style="color: #181D2B; font-size: 20px; font-family: TT Travels; font-weight: 700; line-height: 33px; word-wrap: break-word">
                Знание как делать
              </div>
            </div>
            <div
                style="width: 395px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
              Сервис подскажет как действовать и что учесть, ориентируясь на опыт обследования последних лет собранный в
              1 месте
            </div>
          </div>
          <div
              style="width: 404px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 30px; display: inline-flex">
            <div style="justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex">
              <div style="width: 40px; height: 40px; position: relative">
                <img src="../../../assets/images/quality.svg">
              </div>
              <div
                  style="color: #181D2B; font-size: 20px; font-family: TT Travels; font-weight: 700; line-height: 33px; word-wrap: break-word">
                Качество
              </div>
            </div>
            <div
                style="width: 395px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
              Не бойтесь что-то упустить из-за огромного массива информации. Доверьте обработку таких объемов ИИ без
              ошибок
            </div>
          </div>
          <div
              style="width: 404px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 30px; display: inline-flex">
            <div style="justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex">
              <div style="width: 40px; height: 40px; position: relative">
                <img src="../../../assets/images/rapidity.svg">
              </div>
              <div
                  style="color: #181D2B; font-size: 20px; font-family: TT Travels; font-weight: 700; line-height: 33px; word-wrap: break-word">
                Быстрота внедрения
              </div>
            </div>
            <div
                style="width: 404px; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
              Никаких сложных настроек, интуитивный интерфейс, созданный инженерами для инженеров. Убедитесь на личном
              опыте
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        style="margin-bottom: 150px; width: 100%; height: 100%; flex-direction: column; justify-content: center; align-items: center; gap: 59px; display: inline-flex">
      <div style="flex-direction: column; justify-content: flex-start; align-items: center; gap: 35px; display: flex">
        <div style="justify-content: flex-start; align-items: flex-start; gap: 87px; display: inline-flex">
          <div
              style="flex-direction: column; justify-content: center; align-items: flex-start; gap: 55px; display: inline-flex">
            <div
                style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 35px; display: flex">
              <div
                  style="flex-direction: column; justify-content: center; align-items: center; gap: 35px; display: flex">
                <div
                    style="padding: 10px 20px;background: white; border-radius: 25px; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
                  <p style="color: black; font-size: 14px; font-family: TT Travels; font-weight: 600; text-transform: uppercase; line-height: 23.10px; word-wrap: break-word">
                    будущее проекта</p>
                </div>
                <div style="width: 706px; text-align: center"><span
                    style="color: #E03021; font-size: 35px; font-family: TT Travels; font-weight: 700; text-transform: uppercase; line-height: 49px; letter-spacing: 1.05px; word-wrap: break-word">Что вас ждёт </span><span
                    style="color: #181D2B; font-size: 35px; font-family: TT Travels; font-weight: 700; text-transform: uppercase; line-height: 49px; letter-spacing: 1.05px; word-wrap: break-word">в ближайшем будущем</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
            style="width: 739px; text-align: center; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 400; line-height: 26.40px; word-wrap: break-word">
          Сервис checkpoint-k разрабатывается командой профессиональных программистов и инженеров с большим опытом, и мы
          нацелены на скорый охват значительно большего функционала. Вот наша дорожная карта на 2024 год
        </div>
      </div>
      <div style="width: 1042px; height: 516px; position: relative">
        <div style="width: 1042px; height: 516px; left: 0; top: 0; position: absolute">
          <div
              style=" height: 111px; left: -12px; top: 130px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-end; gap: 25px; display: inline-flex">
            <div
                style="color: #181D2B; font-size: 16px; font-family: TT Travels; font-weight: 700; text-transform: uppercase; line-height: 26.40px; word-wrap: break-word">
              Февраль 2024
            </div>
            <div
                style="text-align: right; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 500; line-height: 32px; word-wrap: break-word">
              Распознавание дефектов на каменных и ж.б. конструкциях<br/>Маркировка дефектов в приложении<br/>Анализ
              архивной документации
            </div>
          </div>
          <div
              style=" height: 111px; left: 583px; top: 0px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 25px; display: inline-flex">
            <div
                style="color: #181D2B; font-size: 16px; font-family: TT Travels; font-weight: 700; text-transform: uppercase; line-height: 26.40px; word-wrap: break-word">
              Июнь 2024
            </div>
            <div
                style="color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 500; line-height: 32px; word-wrap: break-word">
              Расчетный модуль<br/>Распознавание дефектов на металлоконструкциях<br/>Проверка здания на нормативы
            </div>
          </div>
          <div
              style=" height: 111px; left: 583px; top: 259px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 25px; display: inline-flex">
            <div
                style="color: #181D2B; font-size: 16px; font-family: TT Travels; font-weight: 700; text-transform: uppercase; line-height: 26.40px; word-wrap: break-word">
              Октябрь 2024
            </div>
            <div
                style="color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 500; line-height: 32px; word-wrap: break-word">
              Анализ ТЗ и программы работ<br/>Распознавание дефектов на деревянных конструкциях<br/>Выпуск полной версии
            </div>
          </div>
          <div
              style=" height: 125px; left: 176px; top: 391px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-end; gap: 25px; display: inline-flex">
            <div
                style="color: #181D2B; font-size: 16px; font-family: TT Travels; font-weight: 700; text-transform: uppercase; line-height: 26.40px; word-wrap: break-word">
              2025+
            </div>
            <div
                style="text-align: right; color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 500; line-height: 26.40px; word-wrap: break-word">
              Разработка новых модулей<br/>Адаптация под специальные задачи<br/>Более мощный ИИ<br/>Зарубежные
              нормативные базы
            </div>
          </div>
        </div>
        <div
            style="width: 15px; height: 440px; left: 528px; top: 0; position: relative; justify-content: center; align-items: flex-start; display: inline-flex">
          <div style="position: absolute; width: 15px; height: 399px; background: #E03021; border-radius: 23px"></div>
          <div
              style="flex-direction: column; justify-content: center; align-items: center; gap: 80px; display: inline-flex">
            <div style="justify-content: center; align-items: center; gap: 10px; display: inline-flex">
              <div
                  style="position: relative; width: 50px; height: 50px; background: #FFEBE9; border-radius: 9999px"></div>
              <div
                  style="position: absolute; width: 15px; height: 15px; background: #E03021; border-radius: 9999px"></div>
            </div>
            <div style="justify-content: center; align-items: center; gap: 10px; display: inline-flex">
              <div
                  style="position: relative; width: 50px; height: 50px; background: #FFEBE9; border-radius: 9999px"></div>
              <div
                  style="position: absolute; width: 15px; height: 15px; background: #E03021; border-radius: 9999px"></div>
            </div>
            <div style="justify-content: center; align-items: center; gap: 10px; display: inline-flex">
              <div
                  style="position: relative; width: 50px; height: 50px; background: #FFEBE9; border-radius: 9999px"></div>
              <div
                  style="position: absolute; width: 15px; height: 15px; background: #E03021; border-radius: 9999px"></div>
            </div>
            <div
                style="justify-content: center; align-items: center; gap: 10px; display: inline-flex; position: relative">
              <div
                  style="position: relative; width: 50px; height: 50px; background: #FFEBE9; border-radius: 9999px"></div>
              <div
                  style="position: absolute; width: 15px; height: 15px; background: #E03021; border-radius: 9999px"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        style="margin-bottom: 150px;  background: #E03021; border-radius: 25px; overflow: hidden; flex-direction: row;  gap: 10px; display: inline-flex">
      <div
          style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 50px; display: flex; padding: 80px 57px;">
        <div style="flex-direction: column; justify-content: center; align-items: flex-start; gap: 35px; display: flex">
          <div
              style="padding: 10px 20px;background: white; border-radius: 25px; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
            <div
                style="color: black; font-size: 14px; font-family: TT Travels; font-weight: 600; text-transform: uppercase; line-height: 23.10px; word-wrap: break-word">
              Вы готовы?
            </div>
          </div>
          <div
              style="width: 596px; color: white; font-size: 35px; font-family: TT Travels; font-weight: 700; text-transform: uppercase; line-height: 49px; letter-spacing: 1.05px; word-wrap: break-word">
            Ваша история
            <br>цифрового успеха<br>
            начинается здесь
          </div>
        </div>
        <div
            style="padding: 15px 25px;background: #181D2B; border-radius: 25px; justify-content: center; align-items: center; display: inline-flex">
          <div style="justify-content: center; align-items: center; gap: 10px; display: flex">
            <div
                style="color: white; font-size: 18px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
              Начать сотрудничество
            </div>
            <div style="width: 16px; height: 16px; position: relative">
              <img src="../../../assets/images/start.svg">
            </div>
          </div>
        </div>
      </div>
      <img
          src="../../../assets/images/Checkpoint-K_Screen_Render_Red.gif"
          style="width: 590px; left: 0; top: 0; border-radius: 25px; padding-right: 0;"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AboutPage",
  methods: {
    onRegisterButtonClick: function () {
      this.$router.push({name: 'RegisterPage'})
    },
  }
})
</script>

<style scoped>

</style>
