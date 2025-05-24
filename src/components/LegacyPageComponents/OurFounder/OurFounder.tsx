// components/FounderSection.tsx
import Image from "next/image";
import img from "../../../../public/Images/legacyPageImages/image.png";

export default function FounderSection() {
  return (
    <section className="bg-[#fafbfe] py-20 px-4 overflow-hidden">
      <div className="max-w-7xl xl:max-w-[75%] mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left Column - Text */}
          <div className="flex-1  text-[#86868B] text-[17px] leading-relaxed space-y-6 ">
            <h2 className="leading-[1.1] md:text-3xl lg:text-4xl lg2:text-[45px] text-3xl  font-bold text-center md:text-start  text-black mb-6">Our Founder</h2>
            <div className="flex md:hidden flex-col items-center flex-shrink-0 mx-auto lg:px-20">
              <div className="w-80 h-96 relative rounded-xl overflow-hidden shadow-md">
                <Image src={img} alt="Sri Ammembal Subba Rao Pai" width={1000} height={1000} className="object-cover h-full" />
              </div>
              <p className="mt-4 text-center text-[27px] font-semibold text-black">
                Sri Ammembal Subba
                <br />
                Rao Pai
              </p>
            </div>
            <p className="lg2:text-xl">
              Canara High School Association (CHSA) was founded by Sri Ammembal Subba Rao Pai with the sole purpose of imparting the youth of Dakshina
              Kannada with modern education blended with ancient cultural values. He was a great social reformer and philanthropist with a rare
              combination of the ideal and practical. His concern for social upliftment gave birth to the Canara High School , Mangalore in 1891- the
              century old precursor to the conglomeration of Canara educational institutions of today, while his spirit of enterprise gave birth to
              yet another national institution – the Canara Bank, in 1906.
            </p>
            <p className="lg2:text-xl">
              Canara High School has grown into a dozen educational institutions, imparting quality education to over 7000 young boys and girls of
              this part of Karnataka from Nursery level to graduation. Canara Engineering College is the new millenium project of Canara High School
              Association, for which careful planning and preparation was going on right from 1991-92, the centenary year of Canara High School
              Association.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className=" hidden md:flex flex-col items-center flex-shrink-0 mx-auto lg:px-20">
            <div className="w-80  h-96 relative rounded-xl overflow-hidden shadow-md">
              <Image src={img} alt="Sri Ammembal Subba Rao Pai" fill className="object-cover" />
            </div>
            <p className="mt-4 text-center text-[27px] font-semibold text-black">
              Sri Ammembal Subba
              <br />
              Rao Pai
            </p>
          </div>
        </div>
        <div className="text-[#86868B] text-[17px] leading-relaxed  space-y-6 pt-12">
          <p className="lg2:text-xl">
            Born on 19th November, 1852, at Mulky, near Mangalore, he underwent early schooling at Government High School, Mangalore, and it was the
            early demise of his mother that is believed to have profoundly influenced him to take to studies seriously. After passing his F.A.
            Examination, his father sent him to Madras to take up higher studies. Following his graduation from the Presidency College, he joined the
            Madras Law College. There he came into contact with Justice Holloway, whose remarkable personality proved to be a rewarding experience to
            him.
          </p>
          <p className="lg2:text-xl">
            In 1876, following the demise of his father, he returned to Mangalore and successfully practiced Law (It is said that he often attempted
            to persuade amicable out-of-court settlements for his clients, although this sometime cost him his fee). In 1891, four teachers, whom he
            had met in Madras, approached him with a proposal to start a school in Mangalore and thus was born the Canara High School, Mangalore.
            Shortly thereafter, in 1894, with a view to encourage the education of girls, he started the Canara Girls High School, indeed a
            revolutionary step considering the prevalent values and attitude of the people towards ladies education at that time.
          </p>
          <p className="lg2:text-xl">
            The disastrous crash of the Arbuthnot Company at the beginning of the 20th Century prompted him to start - in 1906 - The Canara Hindu
            Permanent Fund Ltd. (now Canara Bank) with a view to enabling the community to mobilise its own resources for self-help.Among his
            important contributions to the GSB community was the setting up of the &apos;Poor Boys Education Fund&apos; (which became ASRP Memorial
            Fund as per the decision taken at a meeting of the GSB Community held in the Bhuvanendra Hall on 1st August 1909)... under the aegis of
            Gowda Saraswath Brahman Parishad, of which he was one of the founders. Throughout his life, Ammembal Subba Rao Pai suffered from a severe
            gout, an affliction to which he finally succumbed on 25th July 1909.
          </p>
        </div>
      </div>
    </section>
  );
}