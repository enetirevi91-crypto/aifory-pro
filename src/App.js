import React from 'react';
import './App.css';
import {
  ShieldCheck,
  Clock,
  Percent,
  User,
  MessageCircle,
  MapPin,
  ArrowLeftRight,
  Shield,
  Send,
  Sparkles,
  Lock,
  Zap,
  Globe2,
  TrendingUp,
  BadgeCheck,
} from 'lucide-react';

const TG_URL = "https://t.me/Aifory_Pro_Exchange";
const TG_CHANNEL = "https://t.me/+ZHeRkICBUr02MDhk";

function Card({ children, className = "", style = {} }) {
  return (
    <div className={`card-base ${className}`} style={style}>
      {children}
    </div>
  );
}

function IconCircle({ children, glowing = false }) {
  return (
    <div className={`icon-circle ${glowing ? 'icon-circle-glow' : ''}`}>
      {children}
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="feature">
      <IconCircle glowing>{icon}</IconCircle>
      <div>
        <div className="feature-title">{title}</div>
        <div className="feature-desc">{desc}</div>
      </div>
    </div>
  );
}

function AdvantageCard({ icon, title, desc, highlight = false }) {
  return (
    <Card className={`advantage-card ${highlight ? 'advantage-highlight' : ''}`}>
      <div className="feature">
        <IconCircle glowing={highlight}>{icon}</IconCircle>
        <div>
          <div className="feature-title">{title}</div>
          <div className="feature-desc">{desc}</div>
        </div>
      </div>
    </Card>
  );
}

function StepCard({ num, icon, title, desc }) {
  return (
    <Card className="step-card">
      <div className="step-header">
        <div className="step-num">{num}</div>
        <div className="step-icon">{icon}</div>
      </div>
      <div className="step-title">{title}</div>
      <div className="step-desc">{desc}</div>
    </Card>
  );
}

function TelegramButton({ children, size = "md" }) {
  const sizeClass = size === "lg" ? "btn-lg" : size === "sm" ? "btn-sm" : "btn-md";
  return (
    <a href={TG_URL} target="_blank" rel="noopener noreferrer" className={`telegram-btn ${sizeClass}`}>
      <Send className={size === "sm" ? "icon-sm" : "icon-md"} />
      {children}
    </a>
  );
}

function App() {
  return (
    <div className="page">
      <div className="bg-aurora" />
      <div className="bg-stars" />
      
      <div className="floating-coins">
        <span className="coin coin-btc" style={{ left: '5%', top: '3%' }}>₿</span>
        <span className="coin coin-eth" style={{ left: '15%', top: '8%' }}>Ξ</span>
        <span className="coin coin-usdt" style={{ left: '25%', top: '4%' }}>₮</span>
        <span className="coin coin-sol" style={{ left: '35%', top: '10%' }}>◎</span>
        <span className="coin coin-bnb" style={{ left: '45%', top: '5%' }}>◈</span>
        <span className="coin coin-btc" style={{ left: '55%', top: '9%' }}>₿</span>
        <span className="coin coin-eth" style={{ left: '65%', top: '3%' }}>Ξ</span>
        <span className="coin coin-usdt" style={{ left: '75%', top: '8%' }}>₮</span>
        <span className="coin coin-sol" style={{ left: '85%', top: '4%' }}>◎</span>
        <span className="coin coin-bnb" style={{ left: '93%', top: '9%' }}>◈</span>
        
        <span className="coin coin-btc" style={{ left: '8%', top: '18%' }}>₿</span>
        <span className="coin coin-eth" style={{ left: '20%', top: '22%' }}>Ξ</span>
        <span className="coin coin-usdt" style={{ left: '32%', top: '16%' }}>₮</span>
        <span className="coin coin-sol" style={{ left: '44%', top: '25%' }}>◎</span>
        <span className="coin coin-bnb" style={{ left: '56%', top: '18%' }}>◈</span>
        <span className="coin coin-btc" style={{ left: '68%', top: '24%' }}>₿</span>
        <span className="coin coin-eth" style={{ left: '80%', top: '16%' }}>Ξ</span>
        <span className="coin coin-usdt" style={{ left: '90%', top: '22%' }}>₮</span>
        <span className="coin coin-sol" style={{ left: '12%', top: '32%' }}>◎</span>
        <span className="coin coin-bnb" style={{ left: '28%', top: '36%' }}>◈</span>
        
        <span className="coin coin-btc" style={{ left: '40%', top: '38%' }}>₿</span>
        <span className="coin coin-eth" style={{ left: '52%', top: '42%' }}>Ξ</span>
        <span className="coin coin-usdt" style={{ left: '64%', top: '36%' }}>₮</span>
        <span className="coin coin-sol" style={{ left: '76%', top: '44%' }}>◎</span>
        <span className="coin coin-bnb" style={{ left: '88%', top: '38%' }}>◈</span>
        <span className="coin coin-btc" style={{ left: '6%', top: '48%' }}>₿</span>
        <span className="coin coin-eth" style={{ left: '18%', top: '52%' }}>Ξ</span>
        <span className="coin coin-usdt" style={{ left: '30%', top: '46%' }}>₮</span>
        <span className="coin coin-sol" style={{ left: '42%', top: '55%' }}>◎</span>
        <span className="coin coin-bnb" style={{ left: '54%', top: '48%' }}>◈</span>
        
        <span className="coin coin-btc" style={{ left: '66%', top: '58%' }}>₿</span>
        <span className="coin coin-eth" style={{ left: '78%', top: '52%' }}>Ξ</span>
        <span className="coin coin-usdt" style={{ left: '90%', top: '58%' }}>₮</span>
        <span className="coin coin-sol" style={{ left: '10%', top: '65%' }}>◎</span>
        <span className="coin coin-bnb" style={{ left: '24%', top: '68%' }}>◈</span>
        <span className="coin coin-btc" style={{ left: '36%', top: '72%' }}>₿</span>
        <span className="coin coin-eth" style={{ left: '48%', top: '66%' }}>Ξ</span>
        <span className="coin coin-usdt" style={{ left: '60%', top: '74%' }}>₮</span>
        <span className="coin coin-sol" style={{ left: '72%', top: '68%' }}>◎</span>
        <span className="coin coin-bnb" style={{ left: '84%', top: '76%' }}>◈</span>
        
        <span className="coin coin-btc" style={{ left: '14%', top: '85%' }}>₿</span>
        <span className="coin coin-eth" style={{ left: '28%', top: '82%' }}>Ξ</span>
        <span className="coin coin-usdt" style={{ left: '40%', top: '88%' }}>₮</span>
        <span className="coin coin-sol" style={{ left: '52%', top: '84%' }}>◎</span>
        <span className="coin coin-bnb" style={{ left: '64%', top: '90%' }}>◈</span>
        <span className="coin coin-btc" style={{ left: '76%', top: '85%' }}>₿</span>
        <span className="coin coin-eth" style={{ left: '88%', top: '92%' }}>Ξ</span>
        <span className="coin coin-usdt" style={{ left: '20%', top: '95%' }}>₮</span>
        <span className="coin coin-sol" style={{ left: '44%', top: '97%' }}>◎</span>
        <span className="coin coin-bnb" style={{ left: '68%', top: '96%' }}>◈</span>
      </div>

      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="logo-wrap">
            <img src="/Aiforypro.png" alt="Aifory Pro" className="logo-img" />
          </div>
          <TelegramButton size="sm">
            <span className="btn-text-full">Написать в Telegram</span>
            <span className="btn-text-short">Telegram</span>
          </TelegramButton>
        </div>
      </div>

      <div className="content">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">
              <Sparkles className="h-4 w-4" />
              <span>Премиальный обменный сервис</span>
            </div>

            <h1 className="hero-title">
              ОБМЕН В <span className="violet-gradient">ЧЕХИИ</span>
            </h1>
            <p className="hero-subtitle">
              Обмен USDT на наличные<br />и наличные на USDT<br />по лучшему курсу
            </p>
            <div className="features-list">
              <Feature icon={<ShieldCheck className="h-5 w-5" />} title="Только при личной встрече" desc="Полная защита при каждой сделке" />
              <Feature icon={<Clock className="h-5 w-5" />} title="Быстро и удобно" desc="Обмен занимает 10–15 минут" />
              <Feature icon={<TrendingUp className="h-5 w-5" />} title="Выгодный курс" desc="Актуальные котировки без наценок" />
            </div>
            <div className="hero-cta">
              <TelegramButton size="lg">Написать в Telegram</TelegramButton>
              <div className="cta-sub">
                <BadgeCheck className="h-4 w-4" />
                <span>Быстрый ответ и консультация</span>
              </div>
            </div>
          </div>

          <div className="right-col">
            <Card className="alert-card alert-premium">
              <div className="feature">
                <IconCircle glowing><Shield className="h-5 w-5" /></IconCircle>
                <div>
                  <div className="alert-title">ПЕРЕВОД АКТИВОВ<br />ТОЛЬКО ПРИ ВСТРЕЧЕ</div>
                  <div className="alert-desc">
                    Мы ценим вашу безопасность!<br />Все операции проводятся только<br />при личной встрече.
                  </div>
                </div>
              </div>
            </Card>

            <div className="section-header">НАШИ ПРЕИМУЩЕСТВА</div>

            <div className="advantages">
              <AdvantageCard highlight icon={<Percent className="h-5 w-5" />} title="Без скрытых комиссий" desc="Озвучиваем один курс заранее" />
              <AdvantageCard icon={<Zap className="h-5 w-5" />} title="Быстро и удобно" desc="Быстрые выплаты наличными" />
              <AdvantageCard icon={<Globe2 className="h-5 w-5" />} title="Лучшие курсы в Чехии" desc="Информация в реальном времени" />
              <AdvantageCard icon={<User className="h-5 w-5" />} title="Индивидуальный подход" desc="Подбираем оптимальные условия" />
            </div>
          </div>
        </div>

        <Card className="steps-card">
          <div className="section-header">КАК ЭТО РАБОТАЕТ</div>
          <div className="steps-grid">
            <StepCard num={1} icon={<MessageCircle className="h-6 w-6" />} title="Связь" desc="Напишите нам в Telegram для обсуждения деталей" />
            <StepCard num={2} icon={<MapPin className="h-6 w-6" />} title="Встреча" desc="Договариваемся о месте и времени встречи" />
            <StepCard num={3} icon={<ArrowLeftRight className="h-6 w-6" />} title="Обмен" desc="Проводим обмен безопасным способом" />
            <StepCard num={4} icon={<Lock className="h-6 w-6" />} title="Безопасность" desc="Гарантируем конфиденциальность" />
          </div>
        </Card>

        <Card className="cta-card">
          <div className="cta-inner">
            <div className="cta-icon">
              <Send className="h-8 w-8" />
            </div>
            <div>
              <div className="cta-title">ГОТОВЫ К ОБМЕНУ?</div>
              <div className="cta-desc">Напишите нам в Telegram</div>
              <div className="cta-fast">Ответим быстро!</div>
            </div>
          </div>
          <TelegramButton size="lg">Перейти в Telegram</TelegramButton>
        </Card>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-copy">© 2024 Aifory Pro</div>
          <a href={TG_CHANNEL} target="_blank" rel="noopener noreferrer" className="footer-link">
            @Aifory_Pro_Exchange
          </a>
          <div className="footer-note">актуальная информация</div>
        </div>
      </footer>
    </div>
  );
}

export default App;