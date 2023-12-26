import "css-doodle";

export default function Doodle({ width = "80px" }) {
  return (
    <css-doodle>
      {`:doodle {
          @grid: 8 / ${width};
          @shape: circle;
          --s: 0;
        }

        :doodle(:hover) {
          --s: 1.5;
        }

        transition: .3s @r(.6s);
        border-radius: @pick(25% 0, 0 100%);
        transform: scale(@r(.1, 1.25));
        transform: translateY(calc(var(--s) * 100%));

        background: hsla(
          calc(240 - 1 * @x * @y),
          80%, 40%, @r.8
        );
  `}
    </css-doodle>
  );
}
