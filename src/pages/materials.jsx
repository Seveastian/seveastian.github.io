import Navbar from "../components/Navbar";
import { materials } from "../data/materials";

export default function Materials() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Study Archive
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Course Materials
          </h1>

          <p className="text-zinc-400 text-lg">
            Lecture notes, lab reports, assignments,
            reference sheets, and project documentation.
          </p>
        </div>

        <div className="space-y-12">
          {materials.map((semester) => (
            <details
                key={semester.semester}
                className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden"
            >
                <summary className="cursor-pointer p-8 text-3xl font-bold text-cyan-400 hover:bg-zinc-800 transition-colors">
                {semester.semester}
                </summary>

                <div className="p-8 border-t border-white/10 space-y-8">
                {semester.courses.map((course) => (
                    <div
                    key={course.course}
                    className="bg-zinc-800 border border-white/10 rounded-3xl p-8"
                    >
                    <h3 className="text-2xl font-bold mb-4">
                        {course.course}
                    </h3>

                    {course.files.length === 0 ? (
                        <p className="text-zinc-500">
                        No materials uploaded yet.
                        </p>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-4">
                        {course.files.map((file) => (
                            <a
                            key={file.path}
                            href={file.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-xl bg-zinc-700 border border-white/10 hover:border-cyan-400"
                            >
                            <h4>{file.title}</h4>
                            </a>
                        ))}
                        </div>
                    )}
                    </div>
                ))}
                </div>
            </details>
            ))}
        </div>
      </main>
    </div>
  );
}