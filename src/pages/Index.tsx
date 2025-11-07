import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: "",
    service: "",
    message: ""
  });

  const services = [
    {
      icon: "Cpu",
      title: "Компьютерная диагностика",
      description: "Глубокая диагностика всех систем автомобиля с использованием оригинального оборудования для японских марок",
      price: "от 2 500 ₽"
    },
    {
      icon: "Wrench",
      title: "Техническое обслуживание",
      description: "Полный комплекс работ по ТО согласно регламенту производителя",
      price: "от 5 000 ₽"
    },
    {
      icon: "Settings",
      title: "Ремонт двигателя",
      description: "Диагностика и ремонт двигателей японских автомобилей любой сложности",
      price: "от 8 000 ₽"
    },
    {
      icon: "Gauge",
      title: "Ремонт ходовой части",
      description: "Замена и ремонт элементов подвески, диагностика на стенде",
      price: "от 3 500 ₽"
    },
    {
      icon: "Zap",
      title: "Электрика и электроника",
      description: "Ремонт электрооборудования и электронных систем",
      price: "от 2 000 ₽"
    },
    {
      icon: "Boxes",
      title: "Замена расходников",
      description: "Замена масел, фильтров, тормозных колодок и других расходных материалов",
      price: "от 1 500 ₽"
    }
  ];

  const reviews = [
    {
      name: "Алексей М.",
      car: "Toyota Camry",
      text: "Отличный сервис! Быстро нашли проблему с двигателем благодаря компьютерной диагностике. Работают профессионалы.",
      rating: 5
    },
    {
      name: "Дмитрий К.",
      car: "Honda CR-V",
      text: "Обслуживаюсь здесь уже 3 года. Всегда качественно, в срок и с гарантией. Рекомендую!",
      rating: 5
    },
    {
      name: "Сергей Л.",
      car: "Nissan Qashqai",
      text: "Делали сложный ремонт АКПП. Всё объяснили, показали, дали рекомендации. Очень доволен!",
      rating: 5
    }
  ];

  const faq = [
    {
      question: "Какие марки японских автомобилей вы обслуживаете?",
      answer: "Мы специализируемся на всех популярных японских марках: Toyota, Honda, Nissan, Mazda, Subaru, Mitsubishi, Lexus, Infiniti и других."
    },
    {
      question: "Используете ли вы оригинальное оборудование?",
      answer: "Да, для диагностики мы используем официальное дилерское оборудование и оригинальное программное обеспечение производителей."
    },
    {
      question: "Какие гарантии вы предоставляете?",
      answer: "Мы предоставляем гарантию на все виды работ от 1 до 12 месяцев в зависимости от типа ремонта. На запчасти действует гарантия производителя."
    },
    {
      question: "Сколько времени занимает диагностика?",
      answer: "Стандартная компьютерная диагностика занимает от 30 минут до 1 часа. Комплексная диагностика может занять до 2-3 часов."
    },
    {
      question: "Можно ли записаться онлайн?",
      answer: "Да, вы можете записаться на удобное время через форму на сайте или позвонив нам по телефону."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={32} className="text-secondary" />
              <span className="text-2xl font-bold text-primary">JapanTech</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-foreground hover:text-secondary transition-colors">Услуги</a>
              <a href="#prices" className="text-foreground hover:text-secondary transition-colors">Цены</a>
              <a href="#about" className="text-foreground hover:text-secondary transition-colors">О нас</a>
              <a href="#reviews" className="text-foreground hover:text-secondary transition-colors">Отзывы</a>
              <a href="#faq" className="text-foreground hover:text-secondary transition-colors">FAQ</a>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-accent hover:bg-accent/90">
                  Записаться
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Запись на обслуживание</DialogTitle>
                  <DialogDescription>
                    Заполните форму и мы свяжемся с вами в ближайшее время
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="car">Марка и модель автомобиля</Label>
                    <Input
                      id="car"
                      value={formData.car}
                      onChange={(e) => setFormData({...formData, car: e.target.value})}
                      placeholder="Toyota Camry 2020"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Желаемая услуга</Label>
                    <Input
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      placeholder="Компьютерная диагностика"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Опишите проблему или пожелания"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Техническое обслуживание японских автомобилей
              </h1>
              <p className="text-xl text-white/90">
                Профессиональная диагностика с использованием оригинального оборудования. Качество и надежность японских технологий.
              </p>
              <div className="flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8">
                      Записаться онлайн
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Запись на обслуживание</DialogTitle>
                      <DialogDescription>
                        Заполните форму и мы свяжемся с вами в ближайшее время
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="hero-name">Имя</Label>
                        <Input
                          id="hero-name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Ваше имя"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hero-phone">Телефон</Label>
                        <Input
                          id="hero-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+7 (999) 123-45-67"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hero-car">Марка и модель автомобиля</Label>
                        <Input
                          id="hero-car"
                          value={formData.car}
                          onChange={(e) => setFormData({...formData, car: e.target.value})}
                          placeholder="Toyota Camry 2020"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline" className="bg-white hover:bg-white/90 text-primary border-white px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">15+</div>
                  <div className="text-white/80 mt-2">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">5000+</div>
                  <div className="text-white/80 mt-2">автомобилей</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">98%</div>
                  <div className="text-white/80 mt-2">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/d132fabf-80f1-4808-a146-c1f96b1f444e/files/ce34037e-fe99-462d-8eb3-67b6c3267a4c.jpg"
                alt="Компьютерная диагностика японских автомобилей"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по обслуживанию и ремонту японских автомобилей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-secondary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{service.price}</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          Записаться
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>{service.title}</DialogTitle>
                          <DialogDescription>
                            Заполните форму для записи на услугу
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="space-y-2">
                            <Label>Имя</Label>
                            <Input
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              placeholder="Ваше имя"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Телефон</Label>
                            <Input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              placeholder="+7 (999) 123-45-67"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Марка и модель</Label>
                            <Input
                              value={formData.car}
                              onChange={(e) => setFormData({...formData, car: e.target.value})}
                              placeholder="Toyota Camry 2020"
                              required
                            />
                          </div>
                          <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                            Отправить заявку
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">О нашем сервисе</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                JapanTech — специализированный автосервис по обслуживанию японских автомобилей. 
                Мы используем только оригинальное диагностическое оборудование и программное обеспечение производителей.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Оригинальное оборудование</h3>
                    <p className="text-muted-foreground">Используем официальное дилерское оборудование для точной диагностики</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Квалифицированные специалисты</h3>
                    <p className="text-muted-foreground">Наши мастера имеют сертификаты и многолетний опыт работы</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Гарантия качества</h3>
                    <p className="text-muted-foreground">Предоставляем официальную гарантию на все виды работ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/d132fabf-80f1-4808-a146-c1f96b1f444e/files/71f3477c-2ee0-4a5a-9b51-5dabb071cd74.jpg"
                alt="Диагностическое оборудование"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.car}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Вопросы и ответы</h2>
            <p className="text-xl text-muted-foreground">Ответы на часто задаваемые вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">Свяжитесь с нами</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white">
                  <Icon name="Phone" size={24} className="text-accent" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-white/90">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <Icon name="Mail" size={24} className="text-accent" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/90">info@japantech.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <Icon name="MapPin" size={24} className="text-accent" />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-white/90">Москва, ул. Автомобильная, д. 15</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <Icon name="Clock" size={24} className="text-accent" />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-white/90">Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/d132fabf-80f1-4808-a146-c1f96b1f444e/files/60a3c20d-0c30-4760-9d19-f01bcdcc2922.jpg"
                alt="Автосервис JapanTech"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-primary/95 border-t border-white/10">
        <div className="container mx-auto text-center text-white/80">
          <p>&copy; 2024 JapanTech. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
