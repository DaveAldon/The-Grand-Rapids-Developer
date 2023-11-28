import { Categories } from './categories.enum';
import { TableElement } from './tableElement';

export const TableCategory_Culture = () => {
  return (
    <div className="p-0 ">
      <div className="grid grid-cols-2 gap-1">
        <TableElement
          title="Ci"
          subtitle={'Improvement'}
          description={'Continuous Improvement mindset'}
          type={Categories.Culture}
          link={'/blog/How-to-Adopt-a-Continuous-Imrovement-Culture'}
        />
        <TableElement
          title="T"
          subtitle={'Transparency'}
          description={'Being proactive about sharing decisions'}
          type={Categories.Culture}
        />
        <TableElement
          title="R"
          subtitle={'Respect'}
          description={'Being respectful of your clients'}
          type={Categories.Culture}
        />
        <TableElement
          title="R"
          subtitle={'Relationships'}
          description={'Keep rejected candidates positively engaged'}
          longTerm
          type={Categories.Culture}
        />
        <TableElement
          title="B"
          subtitle={'Blogs'}
          description={'Master writing skills, share knowledge'}
          type={Categories.Culture}
        />
        <TableElement
          title="O"
          subtitle={'Outsourcing'}
          description={'Tackling work you are not an expert in'}
          longTerm
          type={Categories.Culture}
        />
        <TableElement
          title="H"
          subtitle={'Hackathons'}
          description={'Developer community engagement, candidate sourcing'}
          longTerm
          type={Categories.Culture}
        />
        <TableElement
          title="C"
          subtitle={'Conferences'}
          description={'Learning from others, developer learning environment'}
          type={Categories.Culture}
        />
        <TableElement
          title="Os"
          subtitle={'Open source'}
          description={'Contributing to the community, reputation building'}
          type={Categories.Culture}
        />
      </div>
    </div>
  );
};

export const TableCategory_Architecture = () => {
  return (
    <div className="p-0 ">
      <div className="grid grid-cols-2 gap-1">
        <TableElement
          title="L"
          subtitle={'Long'}
          description={'Define what a long term project is'}
          type={Categories.Architecture}
        />
        <TableElement
          title="S"
          subtitle={'Short'}
          description={'Define what a short term project is'}
          type={Categories.Architecture}
        />
        <TableElement
          title="Ma"
          subtitle={'Mature'}
          description={'Mature projects require mature architectures'}
          type={Categories.Architecture}
        />
        <TableElement
          title="Ex"
          subtitle={'Experimental'}
          description={'When is the time to experiment with new architectures'}
          type={Categories.Architecture}
        />
        <TableElement
          title="Fp"
          subtitle={'FP'}
          description={'Functional programming for faster, ambiguous work'}
          longTerm
          type={Categories.Architecture}
        />
        <TableElement
          title="Oo"
          subtitle={'OOP'}
          description={'Object oriented for stable, long term work'}
          longTerm
          type={Categories.Architecture}
        />
        <TableElement
          title="Na"
          subtitle={'Native'}
          description={'Native code for deep integrations & complex standards'}
          longTerm
          type={Categories.Architecture}
        />
        <TableElement
          title="Mp"
          subtitle={'Multiplatform'}
          description={'Cross platform code for efficiency & simplicity'}
          longTerm
          type={Categories.Architecture}
        />
        <TableElement
          title="Dp"
          subtitle={'Dependencies'}
          description={'When to use monorepos, libraries, & submodules'}
          longTerm
          type={Categories.Architecture}
        />
      </div>
    </div>
  );
};

export const TableCategory_Uniformity = () => {
  return (
    <div className="p-0">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        <TableElement spacer type={Categories.Uniformity} />
        <TableElement spacer type={Categories.Uniformity} />
        <TableElement spacer type={Categories.Uniformity} />
        <TableElement spacer type={Categories.Uniformity} />
        <TableElement
          title="A"
          subtitle={'Analytics'}
          longTerm
          description={'Validate functional quality after release'}
          type={Categories.Uniformity}
        />
        <TableElement
          title="Qa"
          subtitle={'Quality'}
          description={
            'Process for ensuring development validation pre release'
          }
          longTerm
          type={Categories.Uniformity}
        />
        <TableElement
          title="Ut"
          subtitle={'Unit'}
          longTerm
          description={'Validation of modularized, self sustaining code'}
          type={Categories.Uniformity}
        />
        <TableElement
          title="Ft"
          subtitle={'Functional'}
          longTerm
          description={"Validation of a product's user flows"}
          type={Categories.Uniformity}
        />
        <TableElement
          title="It"
          subtitle={'Integration'}
          longTerm
          description={'Validation of a product & its dependencies'}
          type={Categories.Uniformity}
        />
        <TableElement
          title="Ci"
          subtitle={'CI/CD'}
          longTerm
          description={'Efficiently, frequently, & automatically deploying'}
          type={Categories.Uniformity}
        />
        <TableElement
          title="It"
          subtitle={'IDE/Tools'}
          description={'Using the best tool for the situation'}
          type={Categories.Uniformity}
        />
        <TableElement
          title="G"
          subtitle={'Git'}
          description={'Using & mastering version control'}
          type={Categories.Uniformity}
        />
        <TableElement
          title="T"
          subtitle={'Templates'}
          description={'Efficiency through code review automation'}
          type={Categories.Uniformity}
        />
        <TableElement
          title="F"
          subtitle={'Formatting'}
          description={'Removing code style feedback from code review'}
          type={Categories.Uniformity}
        />
        <TableElement
          title="L"
          subtitle={'Linting'}
          description={'Logical consistency & correctness'}
          type={Categories.Uniformity}
        />
        <TableElement
          title="Ac"
          subtitle={'Accessibility'}
          longTerm
          description={'Building for inclusion of users'}
          type={Categories.Uniformity}
        />
      </div>
    </div>
  );
};
