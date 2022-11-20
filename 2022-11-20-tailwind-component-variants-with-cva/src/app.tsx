import { Button } from "./button";
import { Button as CVAButton } from "./button";

const PreviewPane = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className=" border-b [&_h1]:text-2xl [&_h1]:font-bold p-8 [&_h1]:mb-8 bg-gray-100">
    <h1>{title}</h1>
    <div className="flex-row flex-wrap items-start flex">{children}</div>
  </div>
);

const Col = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className="w-80 p-8">
    <h2 className="font-bold border-b mb-5">{title}</h2>
    <div className="flex flex-col items-start space-y-3">{children}</div>
  </div>
);

function App() {
  return (
    <>
      <PreviewPane title="Buttons like you used to build them">
        <Col title="Regular">
          <Button>Add product</Button>
          <Button size="slim">Add product (slim)</Button>
          <Button size="large">Add product (large)</Button>
          <Button disabled>Add product (disabled)</Button>
          <Button modifier="outline">Add product (outline)</Button>
          <Button modifier="plain">Add product (plain)</Button>
          <Button modifier="plain" size="large">
            Add product (large, plain)
          </Button>
          <Button loading>Add product</Button>
        </Col>
        <Col title="Monochrome">
          <Button variant="monochrome">Add product</Button>
          <Button variant="monochrome" size="slim">
            Add product (slim)
          </Button>
          <Button variant="monochrome" size="large">
            Add product (large)
          </Button>
          <Button variant="monochrome" disabled>
            Add product (disabled)
          </Button>
          <Button variant="monochrome" modifier="outline">
            Add product (outline)
          </Button>
          <Button variant="monochrome" modifier="plain">
            Add product (plain)
          </Button>
          <Button variant="monochrome" loading>
            Add product
          </Button>
        </Col>
        <Col title="Primary">
          <Button variant="primary">Add product</Button>
          <Button variant="primary" size="slim">
            Add product (slim)
          </Button>
          <Button variant="primary" size="large">
            Add product (large)
          </Button>
          <Button variant="primary" disabled>
            Add product (disabled)
          </Button>
          <Button variant="primary" modifier="outline">
            Add product (outline)
          </Button>
          <Button variant="primary" modifier="plain">
            Add product (plain)
          </Button>
          <Button variant="primary" loading>
            Add Product
          </Button>
        </Col>
        <Col title="Destructive">
          <Button variant="destructive">Add product</Button>
          <Button variant="destructive" size="slim">
            Add product (slim)
          </Button>
          <Button variant="destructive" size="large">
            Add product (large)
          </Button>
          <Button variant="destructive" disabled>
            Add product (disabled)
          </Button>
          <Button variant="destructive" modifier="outline">
            Add product (outline)
          </Button>
          <Button variant="destructive" modifier="plain">
            Add product (plain)
          </Button>
          <Button variant="destructive" loading>
            Add product
          </Button>
        </Col>

        <Col title="Other">
          <Button>Not full width as comparisson</Button>
          <Button fullWidth>Add product full width</Button>
        </Col>
      </PreviewPane>

      <PreviewPane title="Buttons on steroids with CVA">
        <Col title="Regular">
          <CVAButton>Add product</CVAButton>
          <CVAButton size="slim">Add product (slim)</CVAButton>
          <CVAButton size="large">Add product (large)</CVAButton>
          <CVAButton disabled>Add product (disabled)</CVAButton>
          <CVAButton modifier="outline">Add product (outline)</CVAButton>
          <CVAButton modifier="plain">Add product (plain)</CVAButton>
          <CVAButton modifier="plain" size="large">
            Add product (large, plain)
          </CVAButton>
          <CVAButton loading>Add product</CVAButton>
        </Col>
        <Col title="Monochrome">
          <CVAButton variant="monochrome">Add product</CVAButton>
          <CVAButton variant="monochrome" size="slim">
            Add product (slim)
          </CVAButton>
          <CVAButton variant="monochrome" size="large">
            Add product (large)
          </CVAButton>
          <CVAButton variant="monochrome" disabled>
            Add product (disabled)
          </CVAButton>
          <CVAButton variant="monochrome" modifier="outline">
            Add product (outline)
          </CVAButton>
          <CVAButton variant="monochrome" modifier="plain">
            Add product (plain)
          </CVAButton>
          <CVAButton variant="monochrome" loading>
            Add product
          </CVAButton>
        </Col>
        <Col title="Primary">
          <CVAButton variant="primary">Add product</CVAButton>
          <CVAButton variant="primary" size="slim">
            Add product (slim)
          </CVAButton>
          <CVAButton variant="primary" size="large">
            Add product (large)
          </CVAButton>
          <CVAButton variant="primary" disabled>
            Add product (disabled)
          </CVAButton>
          <CVAButton variant="primary" modifier="outline">
            Add product (outline)
          </CVAButton>
          <CVAButton variant="primary" modifier="plain">
            Add product (plain)
          </CVAButton>
          <CVAButton variant="primary" loading>
            Add Product
          </CVAButton>
        </Col>
        <Col title="Destructive">
          <CVAButton variant="destructive">Add product</CVAButton>
          <CVAButton variant="destructive" size="slim">
            Add product (slim)
          </CVAButton>
          <CVAButton variant="destructive" size="large">
            Add product (large)
          </CVAButton>
          <CVAButton variant="destructive" disabled>
            Add product (disabled)
          </CVAButton>
          <CVAButton variant="destructive" modifier="outline">
            Add product (outline)
          </CVAButton>
          <CVAButton variant="destructive" modifier="plain">
            Add product (plain)
          </CVAButton>
          <CVAButton variant="destructive" loading>
            Add product
          </CVAButton>
        </Col>

        <Col title="Other">
          <CVAButton>Not full width as comparisson</CVAButton>
          <CVAButton fullWidth>Add product full width</CVAButton>
        </Col>
      </PreviewPane>
    </>
  );
}

export default App;
